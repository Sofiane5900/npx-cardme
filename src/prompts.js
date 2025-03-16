// This file is used to manage the different questions the users get
import inquirer from "inquirer";

export async function askUserInfo() {
  const answers = await inquirer.prompt([
    { type: "input", name: "name", message: "What is your full name or username ?" },
    { type: "input", name: "job", message: "What is your working field?" },
    { type: "input", name: "github", message: "What is your GitHub username? (example: Sofiane5900 for github.com/Sofiane5900)" },
    { type: "input", name: "linkedin", message: "What is your LinkedIn username? (example: sofiane-iguedjetal for linkedin.com/in/sofiane-iguedjetal)" },
    { type: "input", name: "discord", message: "What is your Discord username?" },
    { type: "input", name: "namePackage", message: "Please provide a name for your package (example: sofiane for npx sofiane" },
    { type: "confirm", name: "confirm", message: "Do you confirm theses informations ?", default: true }
  ])
  if (!answers.confirm) {
    process.exit(1);
  }
  return answers;
}

