#!/usr/bin/env node
    import fs from "fs";
    import chalk from "chalk"
    import boxen from "boxen"
    const answers = JSON.parse(fs.readFileSync("./answers.json", "utf8"));
    
      const card = ` 
    [1m${answers.name}[22m
    [32m${answers.job}[39m
    
    [34m📂 GitHub:[39m [37mhttps://github.com/${answers.github}[39m
    [34m🔗 LinkedIn:[39m [37mhttps://linkedin.com/in/${answers.linkedin}[39m
    [95m💬 Discord:[39m [37m${answers.discord}[39m
    `;
    
    console.log(boxen(card, { padding: 1, margin: 1, borderStyle: "round", borderColor: "cyan", align: "center" }));
     