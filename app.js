// Internal Modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const questions = require("./questions");

// External Packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { inherits } = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employees = [];

async function createManager (){
    const managerResponses = await inquirer.prompt(questions.manager);
    console.log(managerResponses);
}

async function init() {
    try {

        await createManager();


    } catch (error) {
        console.log(error);
    };
}
init();