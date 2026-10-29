# anaesfacts

Shared, owner-verified anaesthesia knowledge that the owner's apps and teaching sites read (see `README.md`).

## Public here, private elsewhere

Anything merged here is public. Never commit secrets, tokens, personal data, real names or patient details. Private
notes belong in the owner's private notes repo; never copy anything from there into this repo, a PR or an issue
unless the owner asked for that content to be published (neutral pointers like "ask the owner" are fine).

## Rules that bite

- **Only the owner verifies.** Never set `status: verified` or `verified_on` yourself, except when importing text the
  owner has already vetted (the owner's notes count as vetted, owner 29 Oct 2026). Everything else is `status: draft`.
- **No copied wording.** No pasted text from textbooks, journals, guidelines or websites (copyright): restate it in
  fresh short wording, not a close paraphrase; cite the source in `sources` if useful. No images unless the owner made them.
- **Numbers are kept exactly.** When importing from the owner's notes, every number in the note appears in the topic.
- **Style** (owner, 29 Oct 2026; reference `topics/drugs/dobutamine.md`): one-line summary under the title, short
  plain bullets, no up/down arrows (write "increases", "falls"), section titles written out (Administration, not Admin).
  Drugs use, in order and skipping empty ones: Presentation, Administration, Dosage, Mechanism of action, Effects,
  Adverse effects, Contraindications, Indications, Pharmacokinetics. Other topics take sections from their content.
- After import, keep verified entries as they are; change them only when the owner asks. Labels you add for context go in
  square brackets, e.g. `[Infusion]`.
- One topic per file, `topics/<area>/<kebab-case>.md`. Rebuild `index.json`, `CONTENTS.md` and the Related footers (`node tools/build-index.mjs`; never edit those by hand) after
  any change; the check fails if it is stale.

## Fact ids and questions

- A fact is one bullet line under a `##` section (not Flashcards or Related). Id = `<area>/<slug>#<6 hex of the
  normalised line>`; `facts.json` is generated (never by hand). Editing a line changes its id.
- `questions/<area>/<slug>.json` = `{"topic": "<area>/<slug>", "questions": [{fact_id, kind: mcq|statement|blank, stem,
  options (mcq only), answer (mcq: option index; else text), model, date}]}`. `check.mjs` requires: fact_id exists in that
  topic, one answer, every number in the answer appears in the fact exactly. Questions only restate public facts.

## Checks before merging

```
node tools/check.mjs        # front matter, areas, index.json/facts.json/CONTENTS.md/Related up to date, questions/
node --test tests/*.test.mjs
```

## Working with the owner

- Instructions mostly come from a phone. Work through a request to the end; ask only when a decision is genuinely
  the owner's. When asked to plan, plan and wait.
- Keep each PR small and finished on its own. Start PR titles with "Knowledge: …".
- Merge your own PRs once the checks pass, then report with the PR link and call `unsubscribe_pr_activity`.
- `NOTES.md` (lasting decisions) and `STATUS.md` (now, waiting on the owner, next). Read them first; update them when
  a task finishes. Cheap end of session: `quick-save`.
- Plain words, short.
