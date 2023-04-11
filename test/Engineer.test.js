const Engineer = require("../lib/Engineer");

describe("engineer", () => {
    // tests for methods
  describe("get role", () => {
    it("should return engineer as role", () => {
    const e = new Engineer("John", "0123", "john@mail.com","tmcash");
    expect(e.getRole()).toBe("Engineer");
    });
});
describe("get github", () => {
    it("should return github", () => {
    const e = new Engineer("John", "0123", "john@mail.com","tmcash");
    expect(e.getGithub()).toBe(`Github account: <a href="https://github.com/tmcash" class="card-link" target ="_blank">tmcash</a>`);
    });
});

    //tests for properties
describe("xtrainfo property", () => {
    it("should return github", () => {
    const e = new Engineer("John", "0123", "john@mail.com","tmcash");
    expect(e.xtrainfo).toBe(`Github account: <a href="https://github.com/tmcash" class="card-link" target ="_blank">tmcash</a>`);
    });
});
describe("role property", () => {
    it("should return engineer", () => {
    const e = new Engineer("John", "0123", "john@mail.com","tmcash");
    expect(e.role).toBe("Engineer");
    });
});

  // testing that an object is being created
describe("object", () => {
    it("should return object", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
    });
});
});