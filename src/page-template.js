// const generateTeam = team => {

// create the manager html
const generateManager = manager => {
    return `
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Dashboard</title>
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
            <div id="manager" class="row container border border-dark rounded">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Cras justo odio</li>
                      <li class="list-group-item">Dapibus ac facilisis in</li>
                      <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div class="card-body">
                      <a href="#" class="card-link">Card link</a>
                      <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>
            <div id="engineer" class="row container border border-dark rounded"></div>
            <div id="intern" class="row container border border-dark rounded"></div>
        </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <script src="src/page-template.js"></script>
</body>
</html>
    `;
};

//     // create the html for engineers
//     const generateEngineer = engineer => {
//         return `

//         `;
//     };

//     // create the html for interns
//     const generateIntern = intern => {
//         return `

//         `;
//     };

//     // use the team array to generate pieces of html based on the employee role
// }

// module.exports = team => {
//     // template literal - html body that calls the generate team function
// }