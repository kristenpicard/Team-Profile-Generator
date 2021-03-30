// Know I'll need each of these requires to work
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

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
    ])

    .then((data) => {
      const name = data.name;
      const email = data.email;
      const onumber = data.onumber;
      const id = data.id;

      const member = new Manager(name, email, onumber, id);
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
    ])

    .then((data) => {
      const name = data.name;
      const email = data.email;
      const github = data.github;
      const id = data.id;

      const member = new Engineer(name, email, github, id);
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
    ])

    .then((data) => {
      const name = data.name;
      const email = data.email;
      const school = data.school;
      const id = data.id;

      const member = new Intern(name, email, school, id);
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
      },
    ])

    .then(function (data) {
      if (data.choice == "Engineer") {
        engineerPrompt();
      }
      if (data.choice == "Intern") {
        internPrompt();
      } else {
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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Team Profile</title>
    <style></style>
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
    let midTemplate = `
      <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Role: ${myTeam[i].role}</div>
        <div class="card-body">
          <p class="card-text">Name: ${myTeam[i].name}</p>
          <p class="card-text">Email: ${myTeam[i].email}</p>
          <p class="card-text">Id: ${myTeam[i].id}</p>
        </div>
      </div>
      
      `;
    if (myTeam[i].onumber) {
      midTemplate += `
      <p class="card-text">Office Number: ${myTeam[i].onumber}</p>
      </div>
      </div>
      `;
    }
    if (myTeam[i].github) {
      midTemplate += `
      <p class="card-text">GitHub: <a href="https://github.com/${myTeam[i].github}"></a>${myTeam[i].github}</p>
      </div>
      </div>
      `;
    }
    if (myTeam[i].school) {
      midTemplate += `
      <p class="card-text">School: ${myTeam[i].school}</p>
      </div>
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
