// Funniest AI out-of-office reply — program/v1 entry.
// Writes a single one-line auto-reply to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "Auto-reply: I'm out of office. My context window is full, so you've been evicted. Please reintroduce yourself in September.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
