import test from 'node:test';
import assert from 'node:assert/strict';
import { buildApp } from '../tools/lib.mjs';

test('app data: every question points at a fact in its topic, and index.json versions each area file', () => {
  const files = buildApp(), index = JSON.parse(files['app/index.json']);
  for (const [area, meta] of Object.entries(index.areas)) {
    const { topics } = JSON.parse(files[`app/${area}.json`]);
    assert.equal(topics.length, meta.topics);
    for (const t of topics) {
      const hashes = new Set(t.f.map(f => f[0]));
      for (const q of t.q) {
        assert.ok(hashes.has(q[0]), `${area}/${t.k}: question for unknown fact ${q[0]}`);
        if (q[1] === 'mcq') assert.ok(Array.isArray(q[4]) && Number.isInteger(q[3]) && q[4][q[3]] !== undefined);
      }
    }
  }
});
