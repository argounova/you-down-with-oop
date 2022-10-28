const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumMgr) {
      super(name, id, email);
      this.officeNumMgr = officeNumMgr;
    }
     
    getPosition() {
      return 'Manager';
    }
  
    getOfficeNumMgr() {
      return this.officeNumMgr;
    }
}
  
module.exports = Manager;