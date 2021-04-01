const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("Should set office number and role", () => {
    const testON = "10";
    const testRole = "Manager";
    let man = new Manager("Name", "Email", "Id", testON);
    expect(man.officeN).toEqual(testON);
    expect(man.role).toEqual(testRole);
  });
  describe("getOfficeN", () => {
    it("Should get the office number", () => {
      const test = "Office Number";
      let newON = new Manager("Name", "Email", "Id", test);
      expect(newON.getOfficeN()).toEqual(test);
    });
  });
});
