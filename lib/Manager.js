// "Grabs" employee class to use and build from
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, email, id, officeN) {
    super(name, email, id);
    this.role = "Manager";
    this.officeN = officeN;
  }
  getOfficeN() {
    return this.officeN;
  }
}

module.exports = Manager;
