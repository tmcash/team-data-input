const Employee = require("../lib/Employee");

describe("employee", () => {

describe("get role", () => {
        it("should return Employee as role", () => {
        const e = new Employee("Tyler", "0123", "tyler@mail.com");
        expect(e.getRole()).toBe("Employee");
    });
});





describe("get name", () => {
it("should return Tyler as name", () => {
const e = new Employee("Tyler", "0123", "tyler@mail.com");
expect(e.getName()).toBe("Tyler");
});
});


describe("get ID", () => {
        it("should return 0123 as role", () => {
        const e = new Employee("Tyler", "0123", "Tyler@mail.com");
        expect(e.getId()).toBe("0123");
    });
});


describe("get email", () => {
        it("should return tyler@mail.com as email", () => {
        const e = new Employee("Tyler", "0123", "tyler@mail.com");
        expect(e.getEmail()).toBe("tyler@mail.com");
    });
});

describe("empName property", () => {
        it("should return Tyler", () => {
        const e = new Employee("Tyler", "0123", "tyler@mail.com");
        expect(e.empName).toBe("Tyler");
    });

});


describe("id property", () => {
        it("should return 0123", () => {
        const e = new Employee("Tyler", "0123", "tyler@mail.com");
        expect(e.id).toBe("0123");
    });

});
describe("id email property", () => {
        it("should return tyler@mail.com", () => {
        const e = new Employee("Tyler", "0123", "tyler@mail.com");
        expect(e.email).toBe("tyler@mail.com");
    });
});

describe("object", () => {
        it("should return object", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });
});
});