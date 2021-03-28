// HW README instructed to make an employee class that the other roles will build off of
class Employee {
  constructor(emName, id, email) {
    this.emName = emName;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }
  getemName() {
    return this.emName;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Employee;
