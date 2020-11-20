// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, githubName){
        this.name = name;
        this.id = id;
        this.email = email;
        this.githubName = githubName;
    }
    getRole () {
        return 'Engineer';
    }
    getGithub() {
        return this.githubName;
    }
}

module.exports = Engineer