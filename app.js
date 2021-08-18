// link to create page
const generatePage = require('./src/generatePage');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// node modules
const fs = require('fs');
const inquirer = require('inquirer');

// team array
const teamArray = [];

// manager profile
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `What is the Manager's name?`,
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter the manager's name`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: `What is the manager's ID.`,
        validate: nameInput => {
          if (isNaN(nameInput)) {
            console.log(`Please enter the manager's ID`);
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: `What is the manager's email.`,
        validate: email => {
          if (email) {
            return true;
          } else {
            console.log(`Please enter the manager's email!`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: `What is the manager's office number`,
        validate: nameInput => {
          if (isNaN(nameInput)) {
            console.log(`Please enter an office number!`);
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then(managerInput => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    });
};

const addEmployee = () => {
  console.log(`
    =================
    REST OF TEAM MEMBERS
    =================
    `);

  // adding other employeees
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: `What is your employee's role`,
        choices: ['Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name',
        message: `What is the name of the employee?`,
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter an employee's name`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: `What is the employee's ID.`,
        validate: nameInput => {
          if (isNaN(nameInput)) {
            console.log(`Please enter the employee's ID`);
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: `What is the employee's email.`,
        validate: email => {
          if (email) {
            return true;
          } else {
            console.log('Please enter an email!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'github',
        message: `What is the employee's github username.`,
        when: input => input.role === 'Engineer',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter the employee's github username`);
          }
        },
      },
      {
        type: 'input',
        name: 'school',
        message: `What is the intern's school`,
        when: input => input.role === 'Intern',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter the intern's school`);
          }
        },
      },
      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add any more team members?',
        default: false,
      },
    ])
    .then(employeeData => {
      // console.log(employeeData);

      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee;

      if (role === 'Engineer') {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === 'Intern') {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }

      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

// function to generate HTML page file using file system
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
      // when the profile has been created
    } else {
      console.log(
        'Your team profile has been successfully created! Please check out the index.html'
      );
    }
  });
};

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generatePage(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });
