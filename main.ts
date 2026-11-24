// The Long Roast: Lawmakers and the File They Cannot Convert — u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
// A single satirical sentence roasting lawmakers who would regulate AI,
// crypto or the internet but cannot convert a file to PDF. The roast turns
// on the contrast: a 400-page bill before lunch, and the bill itself arriving
// as a sideways photo of a printout.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1-320 characters, one sentence (this sentence: 291 code points,
// verified by running it).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "They can draft a 400-page bill to regulate artificial intelligence before lunch, yet the PDF of that very bill arrives as a sideways photo of a printout, because nobody in the building knows which button converts a file — and these are the people deciding what the internet is allowed to do.";

const points = [...line].length;
if (points < 1 || points > 320 || line.trim().length === 0) {
  throw new Error(`entry must be 1-320 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Read back what was written and confirm it is exactly the sentence.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== line) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the sentence");
}
