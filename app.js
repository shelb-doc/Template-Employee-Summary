// Internal Modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const Questions = require("./questions");

// External Packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { inherits } = require("util");
const { start } = require("repl");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

var employees = [];
const q = new Questions


// start of application
async function init() {
    try {
        const startApp = await q.startQuestion();
        if(startApp.startGame)
            var keepRunning = true
            while (keepRunning) {
                var empRole = await q.employeeRole();
                const empData = await q.employeeQuestions();
                switch(empRole.listEmp) {
                    case 'Manager':
                        var roleData = await q.managerQuestions();
                        newEmployee = new Manager(empData.empName, empData.empEmail, empData.empId, roleData.mgrOffice);
                    break;
                    case 'Engineer':
                        var roleData = await q.engineerQuestions();
                        newEmployee = new Engineer(empData.empName, empData.empEmail, empData.empId, roleData.github);
                    break;
                    case 'Intern':
                        var roleData = await q.internQuestions();
                        newEmployee = new Intern(empData.empName, empData.empEmail, empData.empId, roleData.schoolName);
                    break;
                }
                employees.push(newEmployee)
                console.log(employees);
                var status = await q.confirmEmployee();
                keepRunning = status.confirmEmp
            }
        } catch (error) {
    console.log(error);
    };
// gets all inputs and renders the HTML
    try {
        let renderedHTML = render(employees);
        fs.writeFileSync('./output/index.html', renderedHTML);
        console.log('Success! Your HTML page has been generated in the Output folder.')
    } catch (error) {
        console.log(error);
    }

};
init();