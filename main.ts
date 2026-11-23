import { mkdirSync, writeFileSync } from "node:fs";

// One quiet mystery: a small kindness that cannot be explained, left hanging.
// No instruction, no urgency — just a warm kettle, a waiting cup, and a
// question the reader carries away with them.
const TEXT =
  "Every morning the kettle was already warm when she came down. " +
  "The cup stood waiting on the counter, steam rising in the cold kitchen, " +
  "the spoon laid beside it just so. " +
  "She lived alone. She never asked who had been there first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  console.error(`entry length ${codePoints} code points, must be 1-280`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
console.log(`wrote entry.txt (${codePoints} code points)`);
