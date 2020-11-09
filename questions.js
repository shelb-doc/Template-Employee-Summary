class Questions {
    managerQuestions() {
        const managerQuestions = [
            {
                type: "confirm",
                name: "startGame",
                message: "Welcome to Team Bulider 9000 | Here we make a Webpage that Generates *YOUR* Team! | Do you want to try this App?",
            },
            {
                type: "input",
                name: "mgrName",
                message: "Hello!, Manager What is your name?",
                default: "Mimikyu Cignetti"
            },
            {
                type: "input",
                name: "mgrEmail ",
                message: "What is your employee Email?",
                default: "mimikyu@fake.com"
            },
            {
                type: "input",
                name: "mgrId ",
                message: "What is your employee ID?",
                default: "9987"
            },
            {
                type: "input",
                name: "mgrOffice",
                message: "What is your employee ID?",
                default: "42"
            },
        ]
        return managerQuestions
    }

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