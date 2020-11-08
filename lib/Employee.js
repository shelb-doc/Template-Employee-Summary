// TODO: Write code to define and export the Employee class
class Employee {
    const (name = null, id = null, email = null) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return this.role
    }
}
module.exports = Employee;