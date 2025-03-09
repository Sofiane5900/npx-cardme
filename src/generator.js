import chalk from "chalk";
import path from "path";
import fs from "fs";
import boxen from "boxen";
// retrieve the command name & current directory absolute path
export function createPackageFolder(namePackage) {
  const currentFolderPath = path.resolve(process.cwd());
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`${chalk.yellow("📂 Created package folder: ${folderPath}")}`);
  } else {
    console.log(`${chalk.yellow("📂 Folder already exists: ${folderPath}")}`);
  }
  return currentFolderPath;
}

export function createCommandFile(answers) {
  const newFolderPath = fs.mkdirSync(
    currentFolderPath,
    `npx-${answers.namePackage}`,
  );
  const packagePath = createPackageFolder(answers.namePackage);
  const cardPath = path.join(packagePath, "card.js");
  const packageJsonPath = path.join(packagePath, "card.json");

  const card = boxen(
    `
    ${chalk.bold(answers.name)}
    ${chalk.green(answers.job)}

    ${chalk.blue("📂 GitHub:")} ${chalk.white(`https://github.com/${answers.github}`)}
    ${chalk.blue("🔗 LinkedIn:")} ${chalk.white(`https://linkedin.com/in/${answers.linkedin}`)}
    ${chalk.magentaBright("💬 Discord:")} ${chalk.white(answers.discord)}
        `,
    {
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "cyan",
      align: "center",
    },
  );

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
  fs.writeFileSync(cardPath, commandContent);
  fs.chmodSync(cardPath, "755");

  //package.json template
  const packageJson = {
    name: answers.namePackage.toLowerCase(),
    version: "1.0.0",
    description: `NPX business card for ${answers.name}`,
    main: "card.js",
    bin: {
      [answers.namePackage]: "card.js",
    },
    type: "module",
    dependencies: {
      chalk: "^5.0.0",
      boxen: "^7.0.0",
    },
    author: answers.name,
    license: "ISC",
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  return card;
}
