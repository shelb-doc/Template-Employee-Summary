const inquirer = require("inquirer");
const Manager = require("./lib/Manager");


class Questions {

    async startQuestion(){
        const startQuestion = [
            {
                type: "confirm",
                name: "startGame",
                message: "Welcome to Team Bulider 9000 | Here we make a Webpage that Generates *YOUR* Team! | Do you want to try this App?",
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
        return confirmEmployee
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
        const managerQuestions = await inquirer.prompt(managerQuestions);
        return managerQuestions
    }

    async engineerQuestions() {
        const engineerQuestions = [
            {
                type: "input",
                name: "github",
                message: "What is your GitHub Username?",
            }
        ]
        const engineerQuestions = await inquirer.prompt(engineerQuestions);
        return engineerQuestions
    }

    async internQuestions() {
        const internQuestions = [
            {
                type: "input",
                name: "schoolName",
                message: "What is your School name?",
            }
        ]
        const internQuestions = await inquirer.prompt(internQuestions);
        return internQuestions
    }
}
module.exports = Questions;