const Employee = require('./Employee.js');

class Manager extends Employee {
    
    constructor(empName,id,email,officeNumber) {
  
        super(empName, id, email); 
    
        this.xtrainfo = "Office number: "+officeNumber;
        this.role = 'Manager';
    }


    getRole() {
        return this.role;
    }


    getOfficeNumber() {
        return this.xtrainfo
    }
}


module.exports = Manager;