const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("Should set school and role", () => {
    const testSch = "OSU";
    const testRole = "Intern";
    let int = new Intern("Name", "Email", "Id", testSch);
    expect(int.school).toEqual(testSch);
    expect(int.role).toEqual(testRole);
  });
  describe("getSchool", () => {
    it("Should get the school", () => {
      const test = "School Name";
      let newSch = new Intern("Name", "Email", "Id", test);
      expect(newSch.getSchool()).toEqual(test);
    });
  });
});
