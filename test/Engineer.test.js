const Engineer = require("../lib/Engineer").default;

describe("engineer", () => {

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


describe("object", () => {
        it("should return object", () => {
        const e = new Engineer();
        expect(typeof(e)).toBe("object");
    });
});
});