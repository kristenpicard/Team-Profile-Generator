// "Grabs" employee class to use and build from
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeN) {
    // need to grab employee info and add to it?
    this.officeN = officeN;
    this.role = "Manager";
  }
  getRole() {
    return this.role;
  }
  getOfficeN() {
    return this.officeN;
  }
}

module.exports = Manager;
