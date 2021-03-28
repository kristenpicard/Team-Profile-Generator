// "Grabs" employee class to use and build from
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // need to grab employee info and add to it?
    this.school = school;
    this.role = "Intern";
  }
  getRole() {
    return this.role;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
