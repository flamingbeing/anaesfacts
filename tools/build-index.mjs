// Rewrites index.json from the topic files' front matter.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, indexText, buildIndex } from './lib.mjs';

fs.writeFileSync(path.join(ROOT, 'index.json'), indexText());
console.log(`index.json: ${buildIndex().length} entries`);
