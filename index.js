// Know I'll need each of these requires to work
const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// Uses inquirer to prompt the user with starting manager ?s
// WANTED TO MAKE OWN FUNCTION BUT KEPT SAYING NOT DEFINED? managerPrompt(() => {
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
  });
// });

// CURRENTLY PROMPTING AT SAME TIME AS MANAGER This is the engineer prompt
// engineerPrompt(() => {
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter the Engineer's name: ",
      name: "name",
      validate: function (input) {
        if (input == " ") {
          console.log("Please enter a valid name");
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

    const member = new Manager(name, email, github, id);
    console.log(member);
  });
// });

// CURRENTLY PROMPTING AT SAME TIME AS MANAGER This is the intern prompt
// internPrompt(() => {
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter the Intern's name: ",
      name: "name",
      validate: function (input) {
        if (input == " ") {
          console.log("Please enter a valid name");
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

    const member = new Manager(name, email, school, id);
    console.log(member);
  });
// });
