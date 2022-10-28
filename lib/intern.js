const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
    }

    getGitHub() {
        return this.github;
    }
     
    getPosition() {
      return 'Intern';
    }
}
  
module.exports = Intern;