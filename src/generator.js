import boxen from "boxen";
import chalk from "chalk";
export function generateCard({name,job,github,linkedin}) {

    name = name ? name : "Anonymous";
    job = job ? job : "Unknown Job";
    github = github ? `www.github.com/${github}` : "Not provided";
    linkedin = linkedin ? `www.linkedin.com/in/${linkedin}` : "Not provided";
    const cardContent = `
    ${chalk.bold(name)}
    ${chalk.green(job)}
    
    ${chalk.blue("📂 GitHub:")} ${chalk.white(github)}
    ${chalk.blue("🔗 LinkedIn:")} ${chalk.white(linkedin)}
    `;

    return boxen(cardContent, {
        padding: 1,
        margin: 1,
        borderStyle: "round",
        borderColor: "cyan",
        align: "center",
    });
}

