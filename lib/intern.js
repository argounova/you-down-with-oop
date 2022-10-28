const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email) {
      super(name, id, email);
    }
     
    getPosition() {
      return 'Intern';
    }
}
  
module.exports = Intern;