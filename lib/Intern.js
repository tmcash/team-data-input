const Employee = require('./Employee.js');


class Intern extends Employee {
    
    constructor(empName,id,email,school) {
    
        super(empName, id, email); 
      
        this.xtrainfo = "School: "+school;
        this.role = 'Intern';
    }

  
    getRole() {
        return this.role;
    }
    

    getSchool() {
        return this.xtrainfo;
    }
};

module.exports = Intern;