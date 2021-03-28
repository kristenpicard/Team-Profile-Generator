// "Grabs" employee class to use and build from
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeN) {
    super(name, id, email);
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
