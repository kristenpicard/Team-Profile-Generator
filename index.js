// Know I'll need each of these requires to work
const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// Uses inquirer to prompt the user with quetions
// Grabbed this from my README generator to get started on prompts
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the project Title?",
      name: "title",
      validate: function (input) {
        if (input == " ") {
          console.log("Please enter a valid title");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Enter a description of your project: ",
      name: "description",
      validate: function (input) {
        if (input == " ") {
          console.log("Please enter a valid description");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Enter installation instructions: ",
      name: "install",
      validate: function (input) {
        if (input == " ") {
          console.log("Please enter valid install instructions");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Enter usage information:",
      name: "usage",
      validate: function (input) {
        if (input == " ") {
          console.log("Please enter valid usage info");
        }
        return true;
      },
    },
    {
      type: "checkbox",
      message: "Choose which license type applies:",
      name: "license",
      choices: ["MIT", "GNU", "ISC", "Apache", "None"],
    },
    {
      type: "input",
      message: "Enter all contributor information:",
      name: "contributions",
      validate: function (input) {
        if (input == " ") {
          console.log("Please enter at least your name");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Enter test instructions:",
      name: "test",
      validate: function (input) {
        if (input == " ") {
          console.log("Please enter valid test instructions");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Enter your GitHub username:",
      name: "questions1",
      validate: function (input) {
        if (input == " ") {
          console.log("Please enter a username");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Enter your email address:",
      name: "questions2",
      validate: function (input) {
        if (input == " ") {
          console.log("Please enter an email address");
        }
        return true;
      },
    },
  ])
  .then((data) => {
    // Making a variable that calls the README content
    const template = generateMarkdown(data); // unsure what this hw will call

    // This creates the new README file (arg1: file name,
    // arg2 data used to "fill" file, arg3 is if error).
    fs.writeFile("main.html", template, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
