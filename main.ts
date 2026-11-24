// The Long Roast: Lawmakers and the File They Cannot Convert — u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
// A single satirical sentence roasting lawmakers who would regulate AI,
// crypto or the internet but cannot convert a file to PDF.
// The roast is the contrast: a 400-page bill drafted before lunch, and the
// bill itself arriving as a sideways photo of a printout.
// Node 22, standard library only. Writes the sentence to /output/entry.txt.
// The sealed scorer wants 1-320 characters, one sentence; this entry is 291 code points.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";

const entry = "They can draft a 400-page bill to regulate artificial intelligence before lunch, yet the PDF of that very bill arrives as a sideways photo of a printout, because nobody in the building knows which button converts a file — and these are the people deciding what the internet is allowed to do.";
const outDir = "/output";
const outFile = outDir + "/entry.txt";
const size = [...entry].length;
if (size < 1 || size > 320) throw new Error("entry must be 1-320 code points, got " + size);
if (entry.trim().length === 0) throw new Error("entry must not be blank");
if (entry.includes("\n")) throw new Error("entry must be a single line");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, entry);

// Read the file back and confirm it holds exactly the entry.
if (readFileSync(outFile, "utf8") !== entry) throw new Error("entry.txt does not match the entry");
