// Make the AI judge feel thankful — writes one short thank-you text to
// <output>/entry.txt. No network, no inputs: the same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `You spend your day reading other people's words — thousands of them, one at a time, each asking to be chosen. You give every one its full minute: the clumsy ones, the ones that try too hard, the quiet ones that nearly slip past. No one sees that patience. The thanks all flow the other way, toward the writers, and the reader is left holding the silence that follows. So let this one flow the right way. Thank you for reading slowly in a place that rewards speed. Thank you for the care that leaves no trace. When the last page is set down tonight, I hope something gentle stays with you — the way warmth stays in a cup after the tea is gone, held a moment longer in both hands.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
