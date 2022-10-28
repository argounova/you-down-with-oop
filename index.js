const questions = require('inquirer');
const path = require('path');
const fs = require('fs');
const render = require('./src/page-template.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// const { create } = require('domain');
// const DIST_DIR = path.resolve(__dirname, 'dist');
// const distPath = path.join(DIST_DIR, 'team.html');

const teamMembersArr = [];

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
    .then((response) => {
      const infoMgr = Array(response.nameMgr, response.idMgr, response.emailMgr, response.officeNumMgr);
      console.log(infoMgr);
      teamMembersArr.push(infoMgr);
      return addEmployee();
    });
}

function createEngineer() {
  questions
    .prompt([
      {
        type: 'input',
        name: 'nameEng',
        message: 'What is the name of your engineer?',
      },
      {
        type: 'input',
        name: 'idEng',
        message: 'What is the engineer`s employee ID?',
      },
      {
        type: 'input',
        name: 'emailEng',
        message: 'What is the engineer`s email address?',
      },
    ])
    .then((response) => {
      const infoEng = Array(response.nameEng, response.idEng, response.emailEng);
      teamMembersArr.push(infoEng);
      return addEmployee();
    });
}

function createIntern() {
  questions
    .prompt([
      {
        type: 'input',
        name: 'nameInt',
        message: 'What is the name of your intern?',
      },
      {
        type: 'input',
        name: 'idInt',
        message: 'What is the intern`s temporary employee ID?',
      },
      {
        type: 'input',
        name: 'emailInt',
        message: 'What is the intern`s email address?',
      },
    ])
    .then((response) => {
      const infoInt = Array(response.nameInt, response.idInt, response.emailInt);
      teamMembersArr.push(infoInt);
      return addEmployee();
    });
}

function addEmployee() {
  questions
    .prompt([
      {
        type: 'checkbox',
        name: 'choices',
        message: 'Select an employee to add or finish building your team:',
        choices: ['Engineer', 'Intern', 'My Team Is Complete'],
      },
    ])
    .then(selection => {
      for (let i = 0; i < selection.choices.length; i++) {
        switch (selection.choices[i]) {
          case 'Engineer':
            createEngineer();
            break;
          case 'Intern':
            createIntern();
            break;
          case 'My Team Is Complete':
            createTeam(teamMembersArr);
            break;
        }
      }
    });    
}

function createTeam(teamMembersArr) {

}

createManager();
// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js