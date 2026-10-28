// Shared helpers: find topic files and read their front matter (a small YAML subset: `key: value` and `[a, b]` lists).
import fs from 'node:fs';
import path from 'node:path';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
export const AREAS = ['drugs', 'regional', 'airway', 'comorbidities', 'procedures', 'physiology', 'equipment', 'crises', 'other'];
export const STATUSES = ['verified', 'draft'];

export function topicFiles() {
  const dir = path.join(ROOT, 'topics');
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const area of fs.readdirSync(dir).sort()) {
    const sub = path.join(dir, area);
    if (!fs.statSync(sub).isDirectory()) continue;
    for (const f of fs.readdirSync(sub).sort()) if (f.endsWith('.md')) out.push(`topics/${area}/${f}`);
  }
  return out;
}

export function frontMatter(text) {
  const m = /^---\n([\s\S]*?)\n---\n/.exec(text);
  if (!m) return null;
  const data = {};
  for (const line of m[1].split('\n')) {
    const kv = /^([a-z_]+):\s*(.*?)\s*(#.*)?$/.exec(line);
    if (!kv) continue;
    let v = kv[2];
    if (/^\[.*\]$/.test(v)) v = v.slice(1, -1).split(',').map(s => s.trim()).filter(Boolean);
    data[kv[1]] = v;
  }
  return data;
}

export function buildIndex() {
  return topicFiles().map(p => {
    const fm = frontMatter(fs.readFileSync(path.join(ROOT, p), 'utf8')) || {};
    return { path: p, title: fm.title || '', area: fm.area || '', status: fm.status || '', verified_on: fm.verified_on || '', tags: fm.tags || [] };
  });
}

export const indexText = () => JSON.stringify(buildIndex(), null, 1) + '\n';
