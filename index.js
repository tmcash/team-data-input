// packages used to run the application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

//  questions for user input to create each card
const managerQuestions = [
  {
    type: "input",
    message: "Enter manager name:",
    name: "name",
    validate: validateInput,
  },


  {
    type: "input",
    message: "Enter manager employee ID:",
    name: "empid",
    validate: validateInput,
  },


  {
    type: "input",
    message: "Enter manager email:",
    name: "email",
    validate: validateInput,
  },


  {
    type: "input",
    message: "Enter manager office number:",
    name: "xtrainfo",
    validate: validateInput,
  },


  {
    type: "list",
    choices: [
      { name: "Engineer" },
      { name: "Intern" },
      { name: "Finish building your team." },
    ],
    message: "Add an engineer, add an intern, or finish building your team.",
    name: "nextoption",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "Enter employee name:",
    name: "name",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Enter engineer employee ID:",
    name: "empid",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Enter engineer email:",
    name: "email",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Enter engineer Github:",
    name: "xtrainfo",
    validate: validateInput,
  },


  {
    type: "list",
    choices: [
      { name: "Engineer" },
      { name: "Intern" },
      { name: "Finish building your team." },
    ],
    message: "Add an engineer, add an intern, or finish building your team.",
    name: "nextoption",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "Enter employee name:",
    name: "name",
    validate: validateInput,
  },


  {
    type: "input",
    message: "Enter intern employee ID:",
    name: "empid",
    validate: validateInput,
  },


  {
    type: "input",
    message: "Enter intern email:",
    name: "email",
    validate: validateInput,
  },


  {
    type: "input",
    message: "Enter intern's school:",
    name: "xtrainfo",
    validate: validateInput,
  },

  
  {
    type: "list",
    choices: [
      { name: "Engineer" },
      { name: "Intern" },
      { name: "Finish building your team." },
    ],
    message: "Add an engineer, add an intern, or finish building your team.",
    name: "nextoption",
  },
];

const teamArray = [];

async function init() {
  const response = await inquirer.prompt(managerQuestions);
  const manager = new Manager(
    response.name,
    response.empid,
    response.email,
    response.xtrainfo
  );
  teamArray.push(manager);
  nextQuestions(response);
}

init();


//this function will generate html

async function nextQuestions(response) {
  if (response.nextoption === "Finish building your team.") {
    generateHTML(teamArray);
  };
};