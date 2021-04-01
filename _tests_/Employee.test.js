const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should create a generic teammate", () => {
    const name = "Kristen";
    const email = "kristenpicard93@gmail.com";
    const id = "50";

    let emp = new Employee(name, email, id);

    expect(emp.name).toEqual(name);
    expect(emp.email).toEqual(email);
    expect(emp.id).toEqual(id);
  });
});
