# anaesthesia-knowledge

Shared, owner-verified anaesthesia knowledge that the owner's apps and teaching sites read (see `README.md`).

## Public here, private elsewhere

Anything merged here is public. Never commit secrets, tokens, personal data, real names or patient details. Private
notes belong in the owner's private notes repo; never copy anything from there into this repo, a PR or an issue
unless the owner asked for that content to be published (neutral pointers like "ask the owner" are fine).

## Rules that bite

- **Only the owner verifies.** Never set `status: verified` or `verified_on` yourself, except when importing text the
  owner has already confirmed is the owner's own verified wording. Everything else you add is `status: draft`.
- **Own words only.** No pasted text from textbooks, journals, guidelines or websites (copyright), even reworded
  closely; cite the source in `sources` instead. No images unless the owner made them.
- **No hospital-internal material**: local protocols, phone numbers, ward names, colleagues, cases.
- Keep the owner's wording as written in verified entries; fix nothing without asking. Labels you add for context go in
  square brackets, e.g. `[Infusion]`.
- One topic per file, `topics/<area>/<kebab-case>.md`. Rebuild `index.json` (`node tools/build-index.mjs`) after
  any change; the check fails if it is stale.

## Checks before merging

```
node tools/check.mjs        # front matter, areas, index.json up to date
```

## Working with the owner

- Instructions mostly come from a phone. Work through a request to the end; ask only when a decision is genuinely
  the owner's. When asked to plan, plan and wait.
- Keep each PR small and finished on its own. Start PR titles with "Knowledge: …".
- Merge your own PRs once the checks pass, then report with the PR link and call `unsubscribe_pr_activity`.
- `NOTES.md` (lasting decisions) and `STATUS.md` (now, waiting on the owner, next). Read them first; update them when
  a task finishes. Cheap end of session: `quick-save`.
- Plain words, short.
