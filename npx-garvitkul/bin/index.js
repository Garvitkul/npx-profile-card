#!/usr/bin/env node

// Import necessary modules
import boxen from 'boxen';
import chalk from 'chalk';

// Personal Information from GitHub API (with some manual additions for skills)
const userInfo = {
    name: "Garvit Kulshrestha",
    role: "Cloud Engineer",
    company: "Zynga",
    bio: "Cloud Engineer @Zynga | AWS Community Builder | Winner SIH 2022 | Technical Speaker | Technical Writer | Mentor",
    github: "https://github.com/Garvitkul",
    twitter: "https://twitter.com/techwithgarvit",
    // Skills can be manually curated or potentially fetched if available via API in a more complex setup
    skills: [
        "AWS", "DevOps", "Kubernetes", "Docker", "Terraform",
        "Jenkins", "CI/CD", "Python", "Go", "Linux"
    ],
    // You can add an email if you want to share it
    email: "garvitindian@gmail.com"
};

// Styling for the card
const styles = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green',
    backgroundColor: '#555555'
};

// Constructing the card content
let content = chalk.white.bold(`${userInfo.name}\n`);
content += chalk.white(`${userInfo.role} at ${userInfo.company}\n\n`);
content += chalk.white.italic(`${userInfo.bio}\n\n`);

content += chalk.green.bold("GitHub: ") + chalk.cyan(userInfo.github) + "\n";
content += chalk.blue.bold("Twitter: ") + chalk.cyan(userInfo.twitter) + "\n\n";
// if (userInfo.email) {
//     content += chalk.magenta.bold("Email: ") + chalk.cyan(userInfo.email) + "\n\n";
// }

content += chalk.yellow.bold("Skills:\n");
userInfo.skills.forEach(skill => {
    content += chalk.gray(`- ${skill}\n`);
});

// Display the card
console.log(chalk.green(boxen(content, styles)));
