import test from 'node:test';
import assert from 'node:assert/strict';
import { factsOf, factHash, normaliseLine, numbersIn, questionProblems } from '../tools/lib.mjs';

const TOPIC = `---
title: Demo
area: drugs
status: draft
---

# Demo

One-line summary.

## Dosage

- Start at 3–5 mcg/kg/min
  - Usual range 5–20 mcg/kg/min
- Start at 3–5 mcg/kg/min

## Flashcards
- Q: What is the dose?
  - A: 3–5 mcg/kg/min

<!-- related:start (generated) -->
## Related
- [Other](other.md)
<!-- related:end -->
`;

test('facts: bullets under sections, no flashcards or related, duplicates once', () => {
  const f = factsOf(TOPIC, 'topics/drugs/demo.md');
  assert.deepEqual(f.map(x => x.text), ['Start at 3–5 mcg/kg/min', 'Usual range 5–20 mcg/kg/min']);
  assert.ok(f.every(x => /^drugs\/demo#[0-9a-f]{6}$/.test(x.id)));
  assert.equal(f[0].section, 'Dosage');
});

test('fact id ignores case, spacing and emphasis, but not content', () => {
  assert.equal(factHash('Max **9 mg/kg**'), factHash('  max 9 mg/kg '));
  assert.notEqual(factHash('Max 9 mg/kg'), factHash('Max 4.5 mg/kg'));
  assert.equal(normaliseLine('A  `b`'), 'a b');
});

test('numbersIn reads ranges and decimals', () => {
  assert.deepEqual(numbersIn('3–5 mcg/kg/min, 0.5 mg, 1,000 ml'), ['3', '5', '0.5', '1000']);
});

const fact = { id: 'drugs/demo#aaaaaa', topic: 'drugs/demo', section: 'Dosage', text: 'Start at 3–5 mcg/kg/min' };
const facts = new Map([[fact.id, fact]]);
const base = { fact_id: fact.id, kind: 'mcq', stem: 'Starting dose?', options: ['3–5 mcg/kg/min', '1–2', '10', '20'], answer: 0, model: 'haiku-5.5', date: '2026-10-29' };
const probs = q => questionProblems(q, facts, 'drugs/demo');

test('a good mcq passes', () => assert.deepEqual(probs(base), []));

test('unknown fact_id and wrong topic fail', () => {
  assert.match(probs({ ...base, fact_id: 'drugs/demo#bbbbbb' })[0], /does not exist/);
  assert.match(questionProblems(base, facts, 'drugs/other')[0], /another topic/);
});

test('mcq needs exactly one valid answer index and distinct options', () => {
  assert.match(probs({ ...base, answer: 4 }).join(), /exactly one option/);
  assert.match(probs({ ...base, answer: [0, 1] }).join(), /exactly one option/);
  assert.match(probs({ ...base, options: ['a', 'A', 'b', 'c'] }).join(), /differ/);
});

test('numbers in the answer must be in the fact exactly', () => {
  assert.match(probs({ ...base, options: ['3–6 mcg/kg/min', '1', '2', '4'] }).join(), /number "6"/);
  assert.deepEqual(probs({ ...base, kind: 'statement', options: undefined, answer: 'Start at 3 to 5 mcg/kg/min' }), []);
  assert.match(probs({ ...base, kind: 'statement', options: undefined, answer: '30' }).join(), /number "30"/);
});

test('blank and statement shape', () => {
  const b = { ...base, kind: 'blank', options: undefined, stem: 'Start at ____ mcg/kg/min', answer: '3–5' };
  assert.deepEqual(probs(b), []);
  assert.match(probs({ ...b, stem: 'no gap' }).join(), /gap/);
  assert.match(probs({ ...b, options: ['x'] }).join(), /must not have options/);
});

test('metadata required', () => {
  assert.match(probs({ ...base, model: '' }).join(), /model/);
  assert.match(probs({ ...base, date: '29 Oct' }).join(), /date/);
  assert.match(probs({ ...base, kind: 'quiz' }).join(), /kind/);
});

test('filter: "this topic", shared option text, blank answer not in the fact', () => {
  assert.match(probs({ ...base, stem: 'Does this topic say the dose?' }).join(), /this topic/);
  assert.match(probs({ ...base, options: ['3–5 mcg/kg/min', '3–5 mcg/kg/min IV', '10', '20'] }).join(), /shares the answer/);
  assert.match(probs({ ...base, options: ['3–5 mcg/kg/min', '3-5 mcg/kg/min.', '10', '20'] }).join(), /must differ/);
  const blank = { fact_id: fact.id, kind: 'blank', stem: 'Start at ____', answer: '3–5 mcg/kg/min', model: 'haiku-5.5', date: '2026-10-29' };
  assert.deepEqual(probs(blank), []);
  assert.match(probs({ ...blank, stem: 'Start at 3–5 mcg/kg/min, i.e. ____' }).join(), /gives the answer away/);
  assert.match(probs({ ...blank, answer: '9 mg' }).join(), /not in the fact/);
});
