// packages used to run the application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

//  questions for user input
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

let teamArray = [];


function init(response) {
  inquirer.prompt(managerQuestions).then((response) => {
    const manager = new Manager(
      response.name,
      response.empid,
      response.email,
      response.xtrainfo
    );

    teamArray.push(manager);
    nextQuestions(response);
  });
}

init();


function nextQuestions(response) {
  if (response.nextoption === "Finish building your team.") {

    generateHTML(teamArray);
  }
  if (response.nextoption === "Engineer") {
    
    engineerInquirer();
  }
  else if (response.nextoption === "Intern") {
    
    internInquirer();
  }
}

// creates id cards for each team member.
function generateHTML (teamArray) {

    const cardArray = teamArray.map( teamMember =>`
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${teamMember.empName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${teamMember.getRole()}</h6>
        <p class="card-text">
            <ul>
                <li>ID: ${teamMember.id}</li>
                <li>Email: <a href="mailto:${teamMember.email}">${teamMember.email}</a></li>
                <li>${teamMember.xtrainfo}</li>
            </ul>
        </p>
        </div>
    </div>
    `)


const htmlWrapper = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
<title>My Team</title>
</head>
<body>
<h1 class = "text-center">My Team</h1>
<div class = "row justify-content-center">
    ${cardArray.join("")}
    </div>
</body>
</html>`;


//creates html file

fs.writeFile(
    "./dist/index.html",
    `${htmlWrapper}
    `,
    (err) => (err ? console.log(err) : console.log("HTML generated!"))
);

}


function engineerInquirer(response) {
inquirer.prompt(engineerQuestions).then((response) => {
    const engineer = new Engineer(
    response.name,
    response.empid,
    response.email,
    response.xtrainfo,
    );

    teamArray.push(engineer);
    nextQuestions(response);
});
}


function internInquirer(response) {
inquirer.prompt(internQuestions).then((response) => {
            const intern = new Intern(
            response.name,
            response.empid,
            response.email,
            response.xtrainfo,
    );

    teamArray.push(intern);
    nextQuestions(response);
});
}


function validateInput(input) {
      if (input === "") {
    console.log("Please enter a value.");
    return false;
} else {
    return true;
}
}