// "Grabs" employee class to use and build from
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // need to grab employee info and add to it?
    this.github = github;
    this.role = "Engineer";
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
