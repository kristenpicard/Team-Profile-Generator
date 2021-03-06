// Know I'll need each of these requires to work
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// Empty array that will be filled with the team members as the user chooses them
let myTeam = [];

// First prompt to gather Manager information, then calls add teammate to gather next person's info
function managerPrompt() {
  inquirer
    .prompt([
      {
        message: "Let's Build Your Team Profile! (Press Enter to begin)",
        name: "mssg",
      },
      {
        type: "input",
        message: "Enter the Manager's name: ",
        name: "name",
        validate: function (input) {
          if (input == " ") {
            console.log("Please enter a valid name");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Enter the Manager's email address: ",
        name: "email",
        validate: function (input) {
          if (input == " ") {
            console.log("Please enter valid email");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Enter the Manager's ID #:",
        name: "id",
        validate: function (input) {
          if (input == " ") {
            console.log("Please enter a valid ID number");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Enter the Manager's Office #:",
        name: "onumber",
        validate: function (input) {
          if (input == " ") {
            console.log("Please enter a valid office number");
            return false;
          }
          return true;
        },
      },
    ])

    .then((data) => {
      const name = data.name;
      const email = data.email;
      const id = data.id;
      const onumber = data.onumber;

      const member = new Manager(name, email, id, onumber);
      myTeam.push(member);
      addTeammate();
    });
}

// Prompts to gather info for Engineer
function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the Engineer's name: ",
        name: "name",
        validate: function (input) {
          if (input == " ") {
            console.log("Please enter a valid name");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Enter the Engineer's email address: ",
        name: "email",
        validate: function (input) {
          if (input == " ") {
            console.log("Please enter valid email");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Enter the Engineer's ID #:",
        name: "id",
        validate: function (input) {
          if (input == " ") {
            console.log("Please enter a valid ID number");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Enter the Engineer's Github username:",
        name: "github",
        validate: function (input) {
          if (input == " ") {
            console.log("Please enter a valid username");
            return false;
          }
          return true;
        },
      },
    ])

    .then((data) => {
      const name = data.name;
      const email = data.email;
      const id = data.id;
      const github = data.github;

      const member = new Engineer(name, email, id, github);
      myTeam.push(member);
      addTeammate();
    });
}

// Prompts to gather info for Intern
function internPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the Intern's name: ",
        name: "name",
        validate: function (input) {
          if (input == " ") {
            console.log("Please enter a valid name");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Enter the Intern's email address: ",
        name: "email",
        validate: function (input) {
          if (input == " ") {
            console.log("Please enter valid email");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Enter the Intern's ID #:",
        name: "id",
        validate: function (input) {
          if (input == " ") {
            console.log("Please enter a valid ID number");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Enter the name of the school the Intern attended:",
        name: "school",
        validate: function (input) {
          if (input == " ") {
            console.log("Please enter a valid school");
            return false;
          }
          return true;
        },
      },
    ])

    .then((data) => {
      const name = data.name;
      const email = data.email;
      const id = data.id;
      const school = data.school;

      const member = new Intern(name, email, id, school);
      myTeam.push(member);
      addTeammate();
    });
}

// This checks whether or not to add another member or if not, render page
function addTeammate() {
  inquirer
    .prompt([
      {
        type: "checkbox",
        message: "Would you like to add another team member?",
        name: "choice",
        choices: ["Engineer", "Intern", "No, team complete"],
        validate: function (input) {
          if (input == " ") {
            console.log("Please choose another teammate or to complete team");
            return false;
          }
          return true;
        },
      },
    ])

    .then(function (data) {
      if (data.choice == "Engineer") {
        engineerPrompt();
      }
      if (data.choice == "Intern") {
        internPrompt();
      }
      if (data.choice == "No, team complete") {
        renderPage();
      }
    });
}

// Once all members added, this function creates the HTML mock up and writes it to an HTML file
function renderPage() {
  // Created this array to push the HTML pieces to
  let fullHtml = [];
  // Top of HMTL
  const beginTemplate = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <title>Team Profile</title>
      <style>
          body {
            padding: 4.5rem;
            margin: 0;
            background: linear-gradient(90deg, #f7c3eb 0, #b9f0dd 60%);
            font-family:Verdana, Geneva, Tahoma, sans-serif;
          }
          h1 {
            text-align: center;
            color: #f862d5;
          }
          .card {
            width: 300px;
            height: auto;
            padding: 1rem;
            margin: 1rem;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.7);
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
            float: left;
          }
          .card-header {
            margin-top: 0;
            margin-bottom: 0.75rem;
            font-size: 1.2rem;
            font-weight: bold;
            color: #f862d5;
          }
          p {
            color: #f862d5;
          }
          a {
            color: #0db87c;
            text-decoration: none;
            font-size: 1rem;
          }
      </style>
      <div class="page-header">
          <h1>Team Profile:</h1>
      </div>
  </head>
  <body>
    `;
  // Pushes this into the full HTML array
  fullHtml.push(beginTemplate);
  // Loops through the team array to build the team cards
  for (i = 0; i < myTeam.length; i++) {
    // Setting a variable with which to add the various teammate HTML into
    let midTemplate = ``;
    // Tells what HTML to add for the manager user input
    if (myTeam[i].role == "Manager") {
      midTemplate += `
  <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">Role: ${myTeam[i].role}</div>
      <p>Name: ${myTeam[i].name}</p>
      <p>Email: <a href="mailto:${myTeam[i].email}" target="_blank">${myTeam[i].email}</a></p>
      <p>Id: ${myTeam[i].id}</p>
      <p>Office Number: ${myTeam[i].officeN}</p>
  </div>
      `;
    }
    // Tells what HTML to add for the Engineer user input
    if (myTeam[i].role == "Engineer") {
      midTemplate += `
  <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">Role: ${myTeam[i].role}</div>
      <p>Name: ${myTeam[i].name}</p>
      <p>Email: <a href="mailto:${myTeam[i].email}" target="_blank">${myTeam[i].email}</a></p>
      <p>Id: ${myTeam[i].id}</p>
      <p>GitHub: <a href="https://github.com/${myTeam[i].github}" target="_blank">${myTeam[i].github}</a></p>
  </div>
      `;
    }
    // Tells what HTML to add for the Engineer user input
    if (myTeam[i].role == "Intern") {
      midTemplate += `
  <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">Role: ${myTeam[i].role}</div>
      <p>Name: ${myTeam[i].name}</p>
      <p>Email: <a href="mailto:${myTeam[i].email}" target="_blank">${myTeam[i].email}</a></p>
      <p>Id: ${myTeam[i].id}</p>
      <p>School: ${myTeam[i].school}</p>
  </div>
      `;
    }
    // Pushes these cards to the full HTML array
    fullHtml.push(midTemplate);
  }
  // This is the final HTML piece
  const endTemplate = ` 
</body>
</html>`;
  // Pushes this end piece to the full HTML array
  fullHtml.push(endTemplate);
  // Uses fs library to write to the index.html file. Need .join to change array to string.
  fs.writeFile("index.html", fullHtml.join(""), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// Calls starting Manager prompt
managerPrompt();
