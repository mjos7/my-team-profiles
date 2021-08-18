// create Engineer Profile
const generateEngineer = engineerProfile => {
  return `
    <div class="card">
    <div class="card-header">
      <h3>{</h3>
      <p>MANAGER</p>
    </div>
    <div class="card-body">
      <ul>
        <li>ID: 1</li>
        <li>
          Email:
          <a href="mailto:mark@carecru.com">mark@carecru.com</a>
        </li>
        <li>Github: <a href="https://github.com/mjos7">mjos7</a></li>
      </ul>
    </div>
  </div>
      `;
};

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
        <div class="card">
          <div class="card-header">
            <h3></h3>
            <p>MANAGER</p>
          </div>
          <div class="card-body">
            <ul>
              <li>ID: 1</li>
              <li>
                Email:
                <a href="mailto:mark@carecru.com">mark@carecru.com</a>
              </li>
              <li>Github: <a href="https://github.com/mjos7">mjos7</a></li>
            </ul>
          </div>
        </div>
      </main>
    </body>
  </html>
  `;
