import chalk from "chalk";
import path from "path";
import fs from "fs";
import boxen from "boxen";
// retrieve the command name & current directory absolute path
export function createPackageFolder(answers) {
  const folderPath = path.join(
    process.cwd(),
    `npx-${answers.namePackage.replace(/\s/g, "-")}`,
  );
  // if folder dosen't exist, create one
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log("\n");
    console.log(`${chalk.yellow(`📂 Created package folder: ${folderPath}`)}`);
  }
  return folderPath;
}

export function createCommandFile(answers) {
  const packagePath = createPackageFolder(answers);
  const cardPath = path.join(packagePath, "card.js");
  const packageJsonPath = path.join(packagePath, "package.json");
  const answersFilePath = path.join(packagePath, "answers.json");

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
    ${chalk.bold("${answers.name}")}
    ${chalk.green("${answers.job}")}
    
    ${chalk.blue("📂 GitHub:")} ${chalk.white("https://github.com/${answers.github}")}
    ${chalk.blue("🔗 LinkedIn:")} ${chalk.white("https://linkedin.com/in/${answers.linkedin}")}
    ${chalk.magentaBright("💬 Discord:")} ${chalk.white("${answers.discord}")}
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

  fs.writeFileSync(answersFilePath, JSON.stringify(answers, null, 2));
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  return card;
}
