const inquirer = require("inquirer");


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

    confirmEmployee(){
        const confirmEmployee = [
            {
                type: "confirm",
                name: "confirmEmp",
                message: "Would you like to add another Employee?",
            },
            {
                type: "list",
                name: "listEmp",
                message: "What role is the new Employee?",
                choices:["Engineer", "Intern"]
            },
        ]
        return confirmEmployee
    }

    async employeeQuestions() {
        const employeeQuestions = [
            {
                type: "input",
                name: "empName",
                message: "Hello!, What is your name?",
                default: "Mimikyu Cignetti"
            },
            {
                type: "input",
                name: "empEmail",
                message: "What is your employee Email?",
                default: "mimikyu@fake.com"
            },
            {
                type: "input",
                name: "empId",
                message: "What is your employee ID?",
                default: "9987"
            },
        ]
        const employeeResponses = await inquirer.prompt(employeeQuestions);
        return  employeeResponses
    }

    managerQuestions() {
        const managerQuestions = [
            {
                type: "input",
                name: "mgrOffice",
                message: "What is your Office Number?",
                default: "42"
            },
        ]
        return managerQuestions
    }

    engineerQuestions() {
        const engineerQuestions = [
            {
                type: "input",
                name: "github",
                message: "What is your GitHub Username?",
            },
        ]
        return engineerQuestions
    }

    internQuestions() {
        const internQuestions = [
            {
                type: "input",
                name: "schoolName",
                message: "What is your School name?",
            }
        ]
        return internQuestions
    }
}
module.exports = Questions;