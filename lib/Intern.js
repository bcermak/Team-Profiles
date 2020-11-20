// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require ('./Employee.js')

class Intern extends Employee {
    constructor(name, id, email, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.githubName = githubName;
        this.school = school;
    }
    getRole () {
        return 'Intern';
    }
    getGithub() {
        return this.school;
    }
}

module.exports = Intern