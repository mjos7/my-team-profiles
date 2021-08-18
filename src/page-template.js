// create Manager card
const generateManager = function (manager) {
  return `
    <div class="card">
    <div class="card-header">
      <h3>${manager.name}</h3>
      <p>MANAGER</p>
    </div>
    <div class="card-body">
      <ul>
        <li>ID: ${manager.id}</li>
        <li>
          Email:
          <a href="mailto:${manager.email}">${manager.email}</a>
        </li>
        <li>Office Number: ${manager.officeNumber}<a href="tel:${manager.officeNumber}"></a></li>
      </ul>
    </div>
  </div>
    `;
};

// create Engineer card
const generateEngineer = function (engineer) {
  return `
    <div class="card">
    <div class="card-header">
      <h3>${engineer.name}</h3>
      <p>ENGINEER</p>
    </div>
    <div class="card-body">
      <ul>
        <li>ID: $${engineer.id}</li>
        <li>
          Email:
          <a href="mailto:${engineer.email}">${engineer.email}</a>
        </li>
        <li>Office Number: ${manager.officeNumber}<a href="tel:${manager.officeNumber}"</a></li>
        <li>Github: <a href="https://github.com/${engineer.github}>${engineer.github}</a></li>
      </ul>
    </div>
  </div>
    `;
};

// create Intern card
const generateIntern = function (intern) {
  return `
<div class="card">
    <div class="card-header">
      <h3>${intern.name}</h3>
      <p>INTERN</p>
    </div>
    <div class="card-body">
      <ul>
        <li>ID: ${intern.id}</li>
        <li>
          Email:
          <a href="mailto:${intern.email}">${intern.email}</a>
        </li>
        <li>School: ${intern.school}</a></li>
      </ul>
    </div>
  </div>
    `;
};

// push array to page
generateHTML = data => {
  // array for cards
  pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // call manager function
    if (role === 'Manager') {
      const managerCard = generateManager(employee);

      pageArray.push(managerCard);
    }

    // call engineer function
    if (role === 'Engineer') {
      const engineerCard = generateEngineer(employee);

      pageArray.push(engineerCard);
    }

    // call intern function
    if (role === 'Intern') {
      const internCard = generateIntern(employee);

      pageArray.push(internCard);
    }
  }

  // joining strings
  const employeeCards = pageArray.join('');

  // return to generated page
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

// generate html page
const generateTeamPage = function (employeeCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap"
        rel="stylesheet"
      />
      <title>My Team Profiles</title>
      <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
      <header><h2>My Team</h2></header>
      <main>
      ${employeeCards}
      </main>
    </body>
  </html>
`;
};

// export to index
module.exports = generateHTML;
