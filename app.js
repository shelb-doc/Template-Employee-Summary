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

const employees = [];
const q = new Questions



async function init() {
    try {
        const startApp = await q.startQuestion();
        if(startApp.startGame){
            const empData = await q.employeeQuestions();
            console.log(empData);
        }
        console.log(startApp);
    } catch (error) {
        console.log(error);
    };
}
init();