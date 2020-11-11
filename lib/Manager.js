
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name = null, id = null, email = null, officeNumber = null) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return this.role
    }
}
module.exports = Manager;