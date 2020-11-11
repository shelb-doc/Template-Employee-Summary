const inquirer = require("inquirer");
const Manager = require("./lib/Manager");


class Questions {

    async startQuestion(){
        const startQuestion = [
            {
                type: "confirm",
                name: "startGame",
                message: "Welcome to Team Builder 9000 | Here we make a Webpage that Generates *YOUR* Team! | Do you want to try this App?",
            },
        ]
        const startResponses = await inquirer.prompt(startQuestion);
        return startResponses
    }

    async confirmEmployee(){
        const confirmEmployee = [
            {
                type: "confirm",
                name: "confirmEmp",
                message: "Would you like to add another Employee?",
            }
        ]
        const confirm = await inquirer.prompt(confirmEmployee);
        return confirm
    }


    
    async employeeRole(){
        const employeeRole = [
            {
                type: "list",
                name: "listEmp",
                message: "What role is the new Employee?",
                choices:["Manager","Engineer", "Intern"]
            }
        ]
        const roleResponses = await inquirer.prompt(employeeRole);
        return roleResponses
    }


    async employeeQuestions() {
        const employeeQuestions = [
            {
                type: "input",
                name: "empName",
                message: "Hello!, What is your name?",
                default: "Mimikyu Cignetti",
            },
            {
                type: "input",
                name: "empEmail",
                message: "What is your employee Email?",
                default: "mimikyu@fake.com",
            },
            {
                type: "input",
                name: "empId",
                message: "What is your employee ID?",
                default: "9987",
            }
        ]
        const employeeResponses = await inquirer.prompt(employeeQuestions);
        return employeeResponses
    }

    async managerQuestions() {
        const managerQuestions = [
            {
                type: "input",
                name: "mgrOffice",
                message: "What is your Office Number?",
                default: "42"
            }
        ]
        const managerResponses = await inquirer.prompt(managerQuestions);
        return managerResponses
    }

    async engineerQuestions() {
        const engineerQuestions = [
            {
                type: "input",
                name: "github",
                message: "What is your GitHub Username?",
            }
        ]
        const engineerResponses = await inquirer.prompt(engineerQuestions);
        return engineerResponses
    }

    async internQuestions() {
        const internQuestions = [
            {
                type: "input",
                name: "schoolName",
                message: "What is your School name?",
            }
        ]
        const internResponses = await inquirer.prompt(internQuestions);
        return internResponses
    }
}
module.exports = Questions;