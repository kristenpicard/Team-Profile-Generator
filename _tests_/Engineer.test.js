const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Should set github username and Role", () => {
    const testGH = "CoolName";
    const testRole = "Engineer";
    let eng = new Engineer("Name", "Email", "Id", testGH);
    expect(eng.github).toEqual(testGH);
    expect(eng.role).toEqual(testRole);
  });
  describe("getGithub", () => {
    it("Should get Github username", () => {
      const test = "testUserName";
      let newGH = new Engineer("Name", "Email", "Id", test);
      expect(newGH.getGithub()).toEqual(test);
    });
  });
});
