// Repo checks, run before merging (and in CI):
// 1. Every topic file has front matter with title, a known area matching its folder, and a known status.
// 2. Verified entries have a verified_on date; drafts have none.
// 3. index.json matches the topic files.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, AREAS, STATUSES, topicFiles, frontMatter, indexText } from './lib.mjs';

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

if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`check: ok (${topicFiles().length} topics)`);
