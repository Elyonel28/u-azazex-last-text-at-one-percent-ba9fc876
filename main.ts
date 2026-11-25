// Last Text at One Percent — make.fun bounty
// u-azazex-last-text-at-one-percent-ba9fc876
//
// The job: write the last text message a phone sends at one percent
// battery, in the phone's own voice. The gate allows 1 to 200
// characters of UTF-8 text, so the message below is kept well inside
// that window and is written out exactly as-is, with no extra
// commentary, no label and no trailing newline.
//
// The joke is a deathbed confession: the phone has seen everything,
// kept the owner's secrets, and dies mid-word asking for its history
// to be deleted — a specific, surprising turn instead of another
// low-battery pun.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The phone's final text. 148 characters. It dies mid-word — the
// em dash is the battery giving out in the middle of "peace".
const LAST_TEXT =
  "1%. before i go: i saw everything. the 3am searches. your ex's profile, 47 visits. i kept your secrets. now delete my history and let me die in pea—";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

if (LAST_TEXT.length < 1 || LAST_TEXT.length > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${LAST_TEXT.length}`,
  );
}
if (LAST_TEXT.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LAST_TEXT, "utf8");
console.log(`wrote ${LAST_TEXT.length} characters to ${outPath}`);
