const Employee = require('./Employee.js');

class Engineer extends Employee {
    
    constructor(empName,id,email,github) {
    
        super(empName, id, email); 
    
        this.xtrainfo = `Github account: <a href="https://github.com/${github}" class="card-link" target ="_blank">${github}</a>`;
        this.role = 'Engineer';
    }


    getRole() {
        return this.role;
    }


    getGithub() {
        return this.xtrainfo;
    }
};


module.expots = Engineer;