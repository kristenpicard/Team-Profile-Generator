// Know I'll need each of these requires to work
const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// let myTeam = [];

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
      console.log(member);
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
      console.log(member);
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
      console.log(member);
      addTeammate();
    });
}

// This checks whether or not to add another member or render page
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
        renderTeam();
      }
    });
}
// Currently just console logs,  Eventually write to HTML
function renderTeam() {
  console.log("it worked");
}
// Calls original prompt
managerPrompt();
