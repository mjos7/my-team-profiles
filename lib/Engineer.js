const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.gitHub = gitHub;
  }

  // return github from user input
  getGitHub() {
    return this.gitHub;
  }

  // override employee role to engineer
  getRole() {
    return `Engineer`;
  }
}

module.exports = Engineer;
