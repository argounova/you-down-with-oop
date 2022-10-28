const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('inquirer');
const path = require('path');
const fs = require('fs');
const render = require('./src/page-template.js');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const teamMembersArr = [];

// let choice = '';

function createManager() {
questions
  .prompt([
    {
      type: 'input',
      name: 'nameMgr',
      message: 'What is the name of your manager?',
    },
    {
      type: 'input',
      name: 'idMgr',
      message: 'What is the manager`s employee ID?',
    },
    {
      type: 'input',
      name: 'emailMgr',
      message: 'What is the manager`s email address?',
    },
    {
      type: 'input',
      name: 'officeNumMgr',
      message: 'What is the office number?',
    },
  ])
  .then((responseMgr) => {
    const infoMgr = Array(responseMgr.nameMgr, responseMgr.idMgr, responseMgr.emailMgr, responseMgr.officeNumMgr);
    console.log(infoMgr);
    teamMembersArr.push(infoMgr);
    console.log(teamMembersArr);
    // return createTeam();
  });
}

// function createEngineer() {
//   let nameEng = '';
//   let idEng = '';
//   let emailEng = '';
  
//   questions
//     .prompt([
//       {
//         type: 'input',
//         name: 'nameEng',
//         message: 'What is the name of your engineer?',
//       },
//       {
//         type: 'input',
//         name: 'idEng',
//         message: 'What is the engineer`s employee ID?',
//       },
//       {
//         type: 'input',
//         name: 'emailEng',
//         message: 'What is the engineer`s email address?',
//       },
//     ])
//     .then((response) => {
//       nameEng = response.nameEng;
//       idEng = response.idEng;
//       emailEng = response.emailEng;
//       createTeam();
//     });
//   }

// function createIntern() {
//   let nameInt = '';
//   let idInt = '';
//   let emailInt = '';

//   questions
//     .prompt([
//       {
//         type: 'input',
//         name: 'nameInt',
//         message: 'What is the name of your intern?',
//       },
//       {
//         type: 'input',
//         name: 'idInt',
//         message: 'What is the intern`s temporary employee ID?',
//       },
//       {
//         type: 'input',
//         name: 'emailInt',
//         message: 'What is the intern`s email address?',
//       },
//     ])
//     .then((response) => {
//       nameInt = response.nameInt;
//       idInt = response.idInt;
//       emailInt = response.emailInt;
//       createTeam();
//     });
// }

//   function createTeam() {
//     questions
//       .prompt([
//         {
//           type: 'checkbox',
//           name: 'choice',
//           message: 'Select an employee to add or finish building your team:',
//           choices: ['Engineer', 'Intern', 'My Team Is Complete'],
//         },
//       ])
//       .then((response) => {
//         choice = response.choice;
//         switch (choice) {
//           case 'Engineer':
//               createEngineer();
//               break;
//           case 'Intern':
//               createIntern();
//             break;
//           case 'My Team Is Complete':
//               completeTeam();
//             break;
//         }
//       });    
//   }

  createManager();
  // take those questions and create a new Manager with the user provided answers
  // push that new Manager to the team members array

// STRUCTURING IT

// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js