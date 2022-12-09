const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const generatePage = require('./generatePage')
const teamRoster = [];

//manager questions
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: `What is the Managers's name?`,
            name: 'name',
        },
        {
            type: 'input',
            message: `What is the Managers's id?`,
            name: 'id',
        },
        {
            type: 'input',
            message: `What is the Managers's email?`,
            name: 'email',
        },
        {
            type: 'input',
            message: `What is the Manager's office number?`,
            name: 'officeNumber',
        },
    ])
        .then(response => {
            console.log(response);
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
            teamRoster.push(manager);
            promptSelection();
        })
};

//role creation selections & finish prompt
const promptSelection = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: `Do you want to add a team member?`,
            name: 'selection',
            choices: ['Engineer', 'Intern', 'I do not have any other team members to add']
        },
    ])
        .then(choice => {
            switch (choice.selection) {
                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                case "I do not have any other team members to add":
                outputTeam();
            }
        });
};

//engineer questions
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: `What is the Engineer's name?`,
            name: 'name',
        },
        {
            type: 'input',
            message: `What is the Engineer's id?`,
            name: 'id',
        },
        {
            type: 'input',
            message: `What is the Engineer's email?`,
            name: 'email',
        },
        {
            type: 'input',
            message: `What is the Engineer's GitHub username?`,
            name: 'github',
        },
    ])
        .then(response => {
            console.log(response);
            const engineer = new Engineer(response.name, response.id, response.email, response.github)
            teamRoster.push(engineer);
            promptSelection();
        })
};

//intern questions
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: `What is the Intern's name?`,
            name: 'name',
        },
        {
            type: 'input',
            message: `What is the Intern's id?`,
            name: 'id',
        },
        {
            type: 'input',
            message: `What is the Intern's email?`,
            name: 'email',
        },
        {
            type: 'input',
            message: `What school did the Intern attend?`,
            name: 'school',
        },
    ])
        .then(response => {
            console.log(response);
            const intern = new Intern(response.name, response.id, response.email, response.school)
            teamRoster.push(intern);
            promptSelection();
        })
};


const outputTeam = () => {
    console.log(teamRoster);
fs.writeFile("./dist/roster.html", generatePage(teamRoster), function (err) {
    if (err) return console.log(err);
})
}

//start manager questions upon launch

promptManager();