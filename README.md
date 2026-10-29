# anaesfacts

Anaesthesia facts: one shared, owner-verified source of anaesthesia knowledge for the owner's apps and teaching sites. Each fact lives
here once; apps read it instead of keeping their own copies, so a correction reaches every app.

## What is in it

`topics/<area>/<topic>.md`: one file per topic, Markdown with a short header (front matter):

```yaml
---
title: Dobutamine
area: drugs                 # drugs, regional, airway, comorbidities, procedures, physiology, equipment, crises, other
status: verified            # verified | draft
verified_on: 2026-10-29     # set by the owner only; empty for drafts
origin: owner-notes         # owner-notes | contributed
aliases: [Precedex, dex]    # optional: other names people search for
related: [drugs/clonidine]  # optional: closely related topics (area/slug)
sources: []                 # optional references (title, year, link)
tags: [inotrope]
---
```

- **verified**: written or vetted by the owner. Apps may show these.
- **draft**: proposed by an app or a session, not yet checked. Apps must not show drafts as fact.

`index.json` lists every entry (path, title, area, status, verified date, tags, aliases, related). Topics may end with a
`## Flashcards` section (`- Q: …` with a nested `- A: …`) for revision apps. [CONTENTS.md](CONTENTS.md) lists every topic
by area, and each topic ends with a generated `## Related` footer (its `related` list plus topics that point to it,
existing files only). Rebuild all three with `node tools/build-index.mjs`.

## Using it from an app

Apps that want everything at once read `app/index.json` (each area's version and counts) and `app/<area>.json` (that
area's verified topics with their facts and questions, in short arrays; `tools/lib.mjs` `buildApp` says the shape).
Otherwise read the files at build time, or fetch them at run time from
`https://cdn.jsdelivr.net/gh/flamingbeing/anaesfacts@main/index.json` (and the same path prefix for a
topic file). Filter on `status: verified`. Pin a commit instead of `@main` if the app needs a fixed version.

## Adding to it

Open a PR that adds or edits a topic file with `status: draft`. Only the owner changes a status to `verified`.
No copied wording: no pasted textbook, journal or guideline text (link the source instead), no images you do not own,
and nothing about patients, colleagues or hospital-internal protocols.

Not medical advice; for teaching and the owner's own reference.
