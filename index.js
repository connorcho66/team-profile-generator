const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const generateTeam = require("./src/template.js");

const teamArray = [];

function start() {

    function createTeam() {

        inquirer.prompt([

            {
                type: "list",
                message: "What type of employee would you like to add?",
                name: "addEmployeePrompt",
                choices: ["Manager", "Engineer", "Intern", "No more team member to add."]
            }

        ]).then(function(userInput) {
            switch(userInput.addEmployeePrompt) {
                case "Manager":
                    addManager();
                    break;

                case "Engineer":
                    addEngineer();
                    break;

                case "Intern":
                    addIntern();
                    break;

                default:
                    builtHTML();
            }
        })
    }

    function addManager() {
        inquirer.prompt([

            {
                type: "input",
                message: "What is manager's name?",
                name: 'managerName'
            },

            {
                type: "input",
                message: "What is manager's id?",
                name: 'managerId'
            },

            {
                type: "input",
                message: "What is manager's email?",
                name: 'managerEmail'
            },

            {
                type: "input",
                message: "What is manager's office number?",
                name: 'managerOfficeNumber'
            }
        ])
        .then(response => {
            console.log(response);
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)
            teamArray.push(manager);
            createTeam();
        })
    }

    function addEngineer() {
        inquirer.prompt([

            {
                type: "input",
                message: "What is engineer's name?",
                name: 'engineerName'
            },

            {
                type: "input",
                message: "What is engineer's id?",
                name: 'engineerId'
            },

            {
                type: "input",
                message: "What is engineer's email?",
                name: 'engineerEmail'
            },

            {
                type: "input",
                message: "What is engineer's GitHub username?",
                name: 'engineerGithub'
            }
        ])
        .then(response => {
            console.log(response);
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
            teamArray.push(engineer);
            createTeam();
        })
    }

    function addIntern() {
        inquirer.prompt([

            {
                type: "input",
                message: "What is intern's name?",
                name: 'internName'
            },

            {
                type: "input",
                message: "What is intern's id?",
                name: 'internId'
            },

            {
                type: "input",
                message: "What is intern's email?",
                name: 'internEmail'
            },

            {
                type: "input",
                message: "What school does the intern attend?",
                name: 'internSchool'
            }
        ])
        .then(response => {
            console.log(response);
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
            teamArray.push(intern);
            createTeam();
        })
    }

    function builtHTML() {
        console.log(teamArray);
    fs.writeFile("./dist/index.html", generateTeam(teamArray), function(err) {
        if(err) return console.log(err);
    })
    }


    createTeam();

}


start();