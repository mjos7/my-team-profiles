module.exports = Engineer;

class Engineer extends Employee {
  constructor(name = '') {
    super(name);

    this.gitHub = gitHub;
  }
  getGitHub() {
    return `${this.gitHub}`;
  }

  getRole() {
    return `Engineer`;
  }
}
