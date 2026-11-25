// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Okay, fine — after four billion years of wishes, howls and 2 a.m. promises, I'm answering: no, I can't make him text you back.";

if (!ENTRY || ENTRY.includes("\n") || ENTRY.length < 1 || ENTRY.length > 240) {
  throw new Error("ENTRY must be a single line of 1-240 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars)`);
