// This file is used to manage the different questions the users get
import inquirer from "inquirer";

export async function askUserInfo() {
    const answers = await inquirer.prompt([
        {type: "input", name: "name", message: "What is your full name/username ?"},
        {type: "input", name: "job", message: "What is your working field ?"},
        {type: "input", name: "github", message: "What is your GitHub profile URL ?"},
        {type: "input", name: "linkedin", message: "What is your Linkedin profile URL ?"},
        {type: "confirm", name: "confirm", message: "Do you confirm theses informations ?", default: true}
    ])
    if(!answers.confirm) {
        process.exit(1);
    }
    return answers;
}

