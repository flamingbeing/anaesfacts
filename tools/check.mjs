// Repo checks, run before merging (and in CI):
// 1. Every topic file has front matter with title, a known area matching its folder, and a known status.
// 2. Verified entries have a verified_on date; drafts have none.
// 3. facts.json matches the topics; every question's fact_id exists, has one answer, and the answer's numbers are in the fact.
// 4. index.json, app/, CONTENTS.md and the Related footers match the topic files.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, AREAS, STATUSES, topicFiles, frontMatter, indexText, buildIndex, relatedMap, withRelated, contentsText, factsText, buildApp, buildFacts, questionFiles, questionProblems } from './lib.mjs';

const errors = [];
const fail = m => errors.push(m);

for (const p of topicFiles()) {
  const fm = frontMatter(fs.readFileSync(path.join(ROOT, p), 'utf8'));
  if (!fm) { fail(`${p}: no front matter`); continue; }
  const folder = p.split('/')[1];
  if (!fm.title) fail(`${p}: no title`);
  if (!AREAS.includes(folder)) fail(`${p}: unknown area folder "${folder}" (use one of ${AREAS.join(', ')})`);
  if (fm.area !== folder) fail(`${p}: area "${fm.area}" does not match its folder "${folder}"`);
  if (!STATUSES.includes(fm.status)) fail(`${p}: status must be verified or draft`);
  if (fm.status === 'verified' && !/^\d{4}-\d{2}-\d{2}$/.test(fm.verified_on || '')) fail(`${p}: verified entries need verified_on (YYYY-MM-DD)`);
  if (fm.status === 'draft' && fm.verified_on) fail(`${p}: drafts must not have verified_on`);
  if (!/^[a-z0-9-]+\.md$/.test(path.basename(p))) fail(`${p}: file name should be kebab-case`);
}

const idx = path.join(ROOT, 'index.json');
if (!fs.existsSync(idx) || fs.readFileSync(idx, 'utf8') !== indexText()) fail('index.json is stale: run node tools/build-index.mjs');

const facts = path.join(ROOT, 'facts.json');
if (!fs.existsSync(facts) || fs.readFileSync(facts, 'utf8') !== factsText()) fail('facts.json is stale: run node tools/build-index.mjs');

const app = buildApp(), appDir = path.join(ROOT, 'app');
const appHas = fs.existsSync(appDir) ? fs.readdirSync(appDir).map(f => `app/${f}`) : [];
for (const [p, text] of Object.entries(app)) if (!fs.existsSync(path.join(ROOT, p)) || fs.readFileSync(path.join(ROOT, p), 'utf8') !== text) fail(`${p} is stale: run node tools/build-index.mjs`);
for (const p of appHas) if (!app[p]) fail(`${p} is not built from the topics: run node tools/build-index.mjs`);

const contents = path.join(ROOT, 'CONTENTS.md');
if (!fs.existsSync(contents) || fs.readFileSync(contents, 'utf8') !== contentsText()) fail('CONTENTS.md is stale: run node tools/build-index.mjs');
const rel = relatedMap(buildIndex());
for (const [p, links] of rel) {
  const text = fs.readFileSync(path.join(ROOT, p), 'utf8');
  if (withRelated(text, p, links) !== text) fail(`${p}: Related footer is stale: run node tools/build-index.mjs`);
}

const factMap = new Map(buildFacts().map(f => [f.id, f]));
let nq = 0;
for (const qf of questionFiles()) {
  let data;
  try { data = JSON.parse(fs.readFileSync(path.join(ROOT, qf), 'utf8')); } catch (e) { fail(`${qf}: not valid JSON`); continue; }
  const topic = qf.replace(/^questions\//, '').replace(/\.json$/, '');
  if (data.topic !== topic) fail(`${qf}: "topic" must be "${topic}"`);
  if (!fs.existsSync(path.join(ROOT, 'topics', `${topic}.md`))) fail(`${qf}: no topic file topics/${topic}.md`);
  if (!Array.isArray(data.questions)) { fail(`${qf}: "questions" must be a list`); continue; }
  data.questions.forEach((q, i) => { nq++; for (const m of questionProblems(q, factMap, topic)) fail(`${qf} #${i + 1}: ${m}`); });
}

if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`check: ok (${topicFiles().length} topics, ${factMap.size} facts, ${nq} questions)`);
