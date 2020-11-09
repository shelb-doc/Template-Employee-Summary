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

//     engineerQuestions() {
//         const engineerQuestions = [
//             {
//                 type: "",
//                 name: "",
//                 message: "",
//             },
//             {
//                 type: "input",
//                 name: "mgrName",
//                 message: "Hello!, Manager What is your name?",
//                 default: "Mimikyu Cignetti"
//             },
//             {
//                 type: "input",
//                 name: "mgrEmail ",
//                 message: "What is your employee Email?",
//                 default: "mimikyu@fake.com"
//             },
//             {
//                 type: "input",
//                 name: "mgrId ",
//                 message: "What is your employee ID?",
//                 default: "9987"
//             },
//             {
//                 type: "input",
//                 name: "mgrOffice",
//                 message: "What is your employee ID?",
//                 default: "42"
//             },
//         ]
//         return engineerQuestions
//     }

//     internQuestions() {
//         const internQuestions = [
//             {
//                 type: "confirm",
//                 name: "startGame",
//                 message: "Welcome to Team Bulider 9000 | Here we make a Webpage that Generates *YOUR* Team! | Do you want to try this App?",
//             },
//             {
//                 type: "input",
//                 name: "mgrName",
//                 message: "Hello!, Intern What is your name?",
//             }
//         ]
//         return internQuestions
//     }
}
module.exports = Questions;