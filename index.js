#!/usr/bin/env node
// node shebang

import { askUserInfo } from "./src/prompts.js";
import { createPackageFolder } from "./src/generator.js";
import { createCommandFile } from "./src/generator.js";
import chalk from "chalk";
import cfonts from "cfonts";

function Header() {
  cfonts.say("npx cardme", {
    font: "block",
    align: "left",
    colors: ["blue", "black"],
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
  });
}

async function Menu() {
  Header();
  // width of terminal wiindow, 80 by default
  const terminalWidth = process.stdout.columns || 80;
  console.log("━".repeat(terminalWidth));
  console.log(
    chalk.yellow(
      "\n⚠ WARNING: A folder will be created in the current directory containing:",
    ),
  );
  console.log(chalk.yellow("- package.json"));
  console.log(chalk.yellow("- card.js"));
  console.log(chalk.yellow("You can then publish it with npm by following the repo tutorial.\n"));
  // asking for user info
  const userInfo = await askUserInfo();
  // generate folder & files
  createPackageFolder(userInfo);
  const card = createCommandFile(userInfo);
  console.log(card);
}
Menu();
