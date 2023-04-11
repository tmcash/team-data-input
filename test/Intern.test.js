const Intern = require("../lib/Intern");

describe("intern", () => {
    // tests for methods
describe("get role", () => {
    it("should return intern as role", () => {
    const e = new Intern("Robert", "0123", "robert@mail.com","Coding Bootcamp");
    expect(e.getRole()).toBe("Intern");
    });
});
describe("get school", () => {
    it("should return school of hard knocks", () => {
    const e = new Intern("Robert", "0123", "robert@mail.com","Coding Bootcamp");
    expect(e.getSchool()).toBe(`School: Coding Bootcamp`);
    });
});

    //tests for properties
describe("xtrainfo property", () => {
    it("should return school of hard knocks", () => {
    const e = new Intern("Robert", "0123", "robert@mail.com","Coding Bootcamp");
    expect(e.xtrainfo).toBe(`School: Coding Bootcamp`);
    });
});
describe("role property", () => {
    it("should return intern", () => {
    const e = new Intern("Robert", "0123", "robert@mail.com","Coding Bootcamp");
    expect(e.role).toBe("Intern");
    });
});

  // testing that an object is being created
describe("object", () => {
    it("should return object", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
    });
});
});