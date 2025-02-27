#!/usr/bin/env node
// node shebang


import chalk from "chalk";
import cfonts from "cfonts";

cfonts.say("npx me", {
    font: "block",
    align: "center",
    colors: ["blue", "black"],
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
});

// width of terminal window, 80 by default
const terminalWidth = process.stdout.columns || 80;
console.log("━".repeat(terminalWidth));

