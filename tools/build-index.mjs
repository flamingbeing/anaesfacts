// Rewrites index.json, facts.json, app/ (the app's data), CONTENTS.md and each topic's generated Related footer from the topic files' front matter.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, indexText, buildIndex, relatedMap, withRelated, contentsText, factsText, buildApp } from './lib.mjs';

const index = buildIndex(), rel = relatedMap(index);
for (const t of index) {
  const f = path.join(ROOT, t.path), text = fs.readFileSync(f, 'utf8'), next = withRelated(text, t.path, rel.get(t.path));
  if (next !== text) fs.writeFileSync(f, next);
}
fs.writeFileSync(path.join(ROOT, 'index.json'), indexText());
fs.writeFileSync(path.join(ROOT, 'CONTENTS.md'), contentsText(index));
fs.writeFileSync(path.join(ROOT, 'facts.json'), factsText());
const app = buildApp();
fs.mkdirSync(path.join(ROOT, 'app'), { recursive: true });
for (const f of fs.readdirSync(path.join(ROOT, 'app'))) if (!app[`app/${f}`]) fs.rmSync(path.join(ROOT, 'app', f));
for (const [p, text] of Object.entries(app)) fs.writeFileSync(path.join(ROOT, p), text);
console.log(`index.json, CONTENTS.md: ${index.length} entries`);
