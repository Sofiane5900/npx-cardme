#!/usr/bin/env node
// node shebang

import {askUserInfo} from "./src/prompts.js";
import chalk from "chalk";
import cfonts from "cfonts";

function Header(){
    cfonts.say("npx me", {
        font: "block",
        align: "center",
        colors: ["blue", "black"],
        letterSpacing: 1,
        lineHeight: 1,
        space: true,
    });
}


// width of terminal window, 80 by default
const terminalWidth = process.stdout.columns || 80;
console.log("━".repeat(terminalWidth));


async function Menu() {
    Header();
    console.log(chalk.yellow(“\n⚠ WARNING: A folder will be created in the current directory containing:”));
    console.log(chalk.yellow(“- package.json”));
    console.log(chalk.yellow(“- index.js”));
    console.log(chalk.yellow(“You can then publish it with npm.\n”)); 
    const userInfo = await askUserInfo();
    const card = generateCard(userInfo);
    console.log(card);
}
Menu();
