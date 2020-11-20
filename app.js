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
            type: "checkbox",
            message: "Employee Role: ",
            name: "role",
            choices: roleTypes
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
            name: "new",
            message: "Would you like to add another employee?"
        }
    
    ]) 

    function create() {
        inquirer
            .prompt(questionList)
            .then((data) => {
                if (data.new) {
                    teamProfile.push(data);
                    person();
                } else {
                    console.log("The end is here!");
                    teamProfile.push(data);
                    fs.writeFileSync(outputPath, render(teamProfile), "utf8");
                }
            })
    }
    
   create();
