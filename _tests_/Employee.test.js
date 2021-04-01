const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Should create a teammate", () => {
    const testName = "Kristen";
    const testEmail = "kristen@gmail.com";
    const testId = "50";
    const testRole = "Employee";
    let emp = new Employee(testName, testEmail, testId, testRole);

    expect(emp.name).toEqual(testName);
    expect(emp.email).toEqual(testEmail);
    expect(emp.id).toEqual(testId);
    expect(emp.role).toEqual(testRole);
  });
  describe("getemName", () => {
    it("Should get the name", () => {
      const test = "Name";
      let newName = new Employee(test);
      expect(newName.getemName()).toEqual(test);
    });
  });
  describe("getEmail", () => {
    it("Should get the email", () => {
      const test = "Email";
      let newEmail = new Employee("Name", test);
      expect(newEmail.getEmail()).toEqual(test);
    });
  });
  describe("getId", () => {
    it("Should get the ID", () => {
      const test = "Id";
      let newId = new Employee("Name", "Email", test);
      expect(newId.getId()).toEqual(test);
    });
  });
});
