

const generateManager = infoMgr => {
    return `
    <div id="manager" class="row container border border-dark rounded">
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">MANAGER</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: </li>
                <li class="list-group-item">Email: </li>
                <li class="list-group-item">Office Number: </li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Email Manager</a>
                <a href="#" class="card-link">View Manager's GitHub</a>
            </div>
        </div>
    </div>
    `;
};

const generateEngineer = infoEng => {
    return `
    <div id="manager" class="row container border border-dark rounded">
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Engineer</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: </li>
                <li class="list-group-item">Email: </li>
                <li class="list-group-item">Office Number: </li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Email Engineer</a>
                <a href="#" class="card-link">View Engineer's GitHub</a>
            </div>
        </div>
    </div>
    `;
};

const generateIntern = infoInt => {
    return `
    <div id="manager" class="row container border border-dark rounded">
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Intern</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: </li>
                <li class="list-group-item">Email: </li>
                <li class="list-group-item">Office Number: </li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Email Intern</a>
                <a href="#" class="card-link">View Intern's GitHub</a>
            </div>
        </div>
    </div>
    `;
};

module.exports = team => {
   ` 
   <!DOCTYPE html>
    <html lang="en-US">
   
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="./style.css">
    </head>

    <body>
    <header>
        <h1>My <span class="bold">Team</span></h1>
    </header>

    <main>
        <div class="container">
            <div id="manager" class="row container border border-dark rounded">${generateManager}</div>
            <div id="engineer" class="row container border border-dark rounded">${generateEngineer}</div>
            <div id="intern" class="row container border border-dark rounded">${generateIntern}</div>
        </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <script src="src/page-template.js"></script>
    </body>
    </html>
`
}