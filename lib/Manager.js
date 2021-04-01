// "Grabs" employee class to use and build from
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, email, id, officeN) {
    super(name, email, id);
    this.officeN = officeN;
    this.role = "Manager";
  }
  getOfficeN() {
    return this.officeN;
  }
}

module.exports = Manager;
