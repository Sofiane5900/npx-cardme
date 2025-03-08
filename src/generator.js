import chalk from "chalk";
import path from "path";
import fs from "fs";

// retrieve the command name & current directory absolute path
export function createPackageFolder(namePackage) {
  const packageName = `npx ${namePackage}`;
  const folderPath = path.resolve(process.cwd());

  return folderPath;
}

export function createCommandFile(answers) {
  const packagePath = createPackageFolder(answers.namePackage);
  const filePath = path.join(packagePath, "card.js");

  const commandContent = `#!/usr/bin/env node
    import chalk from "chalk"
    import boxen from "boxen"
    
      const card = \` 
    ${chalk.bold("${userData.name}")}
    ${chalk.green("${userData.job}")}
    
    ${chalk.blue("📂 GitHub:")} ${chalk.white("https://github.com/${userData.github}")}
    ${chalk.blue("🔗 LinkedIn:")} ${chalk.white("https://linkedin.com/in/${userData.linkedin}")}
    ${chalk.magentaBright("💬 Discord:")} ${chalk.white("${userData.discord}")}
    \`;
    
    console.log(boxen(card, { padding: 1, margin: 1, borderStyle: "round", borderColor: "cyan", align: "center" }));
    `;

  // write the file "card.js" and give permissions
  fs.writeFileSync(filePath, commandContent);
  fs.chmodSync(filePath, "755");

  console.log(`package.json created at ${packagePath}`);
}
