const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamProfile = [];

const questionList = ([
        {
            type: "input",
            message: "Employee Name: ",
            name: "name"
        },
        {
            type: "number",
            message: "Employee ID: ",
            name: "id"
        },
        {
            type: "input",
            message: "Employee Email: ",
            name: "email"
        },
        {
            type: "list",
            name: "role",
            message: "What is their role?",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "number",
            name: "officeNumber",
            message: "What is your office number?",
            when: (answer) => {
                return answer.role == "Manager";
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username?",
            when: (answer) => {
                return answer.role == "Engineer";
            }
        },
        {
            type: "input",
            name: "school",
            message: "What school do you go to?",
            when: (answer) => {
                return answer.role == "Intern";
            }
        },
        {
            type: "confirm",
            name: "newEmp",
            message: "Would you like to add another employee?"
        }
    
    ]) 

    function create() {
        inquirer
            .prompt(questionList)
            .then((data) => {
                if (data.newEmp) {
                    teamProfile.push(data);
                    create();
                } else {
                    console.log("The end is here!");
                    teamProfile.push(data);
                    fs.writeFileSync(outputPath, render(teamProfile), "utf8");
                }
            })
    }
    
   create();
