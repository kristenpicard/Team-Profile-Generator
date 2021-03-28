// Know I'll need each of these requires to work
const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// Uses inquirer to prompt the user with starting manager ?s
// managerPrompt(() => {
inquirer
  .prompt([
    {
      message: "Let's Build Your Team Profile!",
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
  ])

  .then((data) => {
    const name = data.name; // unsure what this hw will call

    const member = new Manager(name);
    console.log(member);
  });
// });

// This is the engineer prompt
// engineerPrompt(() => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "Enter the Engineer's name: ",
//         name: "name",
//         validate: function (input) {
//           if (input == " ") {
//             console.log("Please enter a valid name");
//           }
//           return true;
//         },
//       },
//       {
//         type: "input",
//         message: "Enter the Engineer's email address: ",
//         name: "email",
//         validate: function (input) {
//           if (input == " ") {
//             console.log("Please enter valid email");
//           }
//           return true;
//         },
//       },
//       {
//         type: "input",
//         message: "Enter the Engineer's Github username:",
//         name: "github",
//         validate: function (input) {
//           if (input == " ") {
//             console.log("Please enter a valid username");
//           }
//           return true;
//         },
//       },
//     ])

//     .then((data) => {
//       // Making a variable that calls the README content
//       const template = managerPrompt(data); // unsure what this hw will call

//       // This creates the new README file (arg1: file name,
//       // arg2 data used to "fill" file, arg3 is if error).
//       fs.writeFile("main.html", template, (err) =>
//         err ? console.log(err) : console.log("Success!")
//       );
//     });
// });

// // This is the intern prompt
// internPrompt(() => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "Enter the Intern's name: ",
//         name: "name",
//         validate: function (input) {
//           if (input == " ") {
//             console.log("Please enter a valid name");
//           }
//           return true;
//         },
//       },
//       {
//         type: "input",
//         message: "Enter the Intern's email address: ",
//         name: "email",
//         validate: function (input) {
//           if (input == " ") {
//             console.log("Please enter valid email");
//           }
//           return true;
//         },
//       },
//       {
//         type: "input",
//         message: "Enter the name of the school the Intern attended:",
//         name: "school",
//         validate: function (input) {
//           if (input == " ") {
//             console.log("Please enter a valid school");
//           }
//           return true;
//         },
//       },
//     ])

//     .then((data) => {
//       // Making a variable that calls the README content
//       const template = managerPrompt(data); // unsure what this hw will call

//       // This creates the new README file (arg1: file name,
//       // arg2 data used to "fill" file, arg3 is if error).
//       fs.writeFile("main.html", template, (err) =>
//         err ? console.log(err) : console.log("Success!")
//       );
//     });
// });

// managerPrompt();
