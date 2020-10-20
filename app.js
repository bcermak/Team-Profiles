const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const roleTypes = ["Manager", "Engineer", "Intern"]

const managerQuestion = 
[
    {
    type: "input",
    message: "What is your office number?",
    name: "officenumber"
    },
]

const engineerQuestion = 
[
    {
    type: "input",
    message: "What is your GitHub username?",
    name: "engineerGitHub"
    },
]

const internQuestion = 
[
    {
    type: "input",
    message: "What school did you graduate from?",
    name: "internSchool"
    },
]


inquirer.prompt([
        {
            type: "input",
            message: "Employee Name: ",
            name: "name"
        },
        {
            type: "input",
            message: "Employee ID: ",
            name: "id"
        },
        {
            type: "input",
            message: "Employee Email: ",
            name: "email"
        },
        {
            type: "checkbox",
            message: "Employee Role: ",
            name: "role",
            choices: roleTypes
        }
    ]) .then(function(response) {
        console.log(response);
        if(response.role == "Manager") {
            console.log("success")
            inquirer.prompt(managerQuestion)
        }
        if(response.role == "Engineer") {
            console.log("success")
            inquirer.prompt(engineerQuestion) 
        }
        if(response.role == "Intern") {
            console.log("success")
            inquirer.prompt(internQuestion) 
        }
     })

