module.exports = Manager;

class Manager extends Employee {
  constructor(name = '') {
    super(name);

    this.officeNumber = officeNumber;
  }
  getofficeNumber() {
    return `${this.officeNumber}`;
  }

  getRole() {
    return `Manager`;
  }
}
