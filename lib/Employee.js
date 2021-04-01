// HW README instructed to make an employee class that the other roles will build off of
class Employee {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = "Employee";
  }
  getemName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Employee;
