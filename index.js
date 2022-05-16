//used module 9 template

const inquirer = require('inquirer');
const generateHTML = require('./src/page-template.js');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const employeeArray = [];

const inputManager = () => {
  return inquirer.prompt([
    {
      type: 'type',
      name: 'name',
      message: "What is your Manager's name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a valid Manager name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter your Manager ID (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your Manager ID');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the manager email',
      validate: emailInput => {
          if(emailInput) {
              return true;
          } else {
              console.log('Please enter your Manager email');
              return false;
          }
      }

    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Provide the manager office number',
      validate: officeNumberInput => {
        if(officeNumberInput) {
            return true;
        } else {
            console.log('Please enter your Manager office number')
            return false;
        }
    }
}

  ])

 .then(managerData => {
     const { name, id, email, officeNumber } = managerData;
     const manager = new Manager (name, id, email, officeNumber);
     employeeArray.push(manager);
     return employeeArray
 }) 

};

const inputEmployee = () => {
  console.log(`
=================
Add a New Employee
=================
`);

  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Select the role of the Employee',
        choices: ['Engineer', 'Intern'],
        validate: roleInput => {
          if (roleInput) {
            return true;
          } else {
            console.log('Please choose one of the choices');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the new employee (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the new employee name');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the new employee email. (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('please enter a valid email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter the engineers github',
        when: (selected) => {
            if (selected.role == "Enginner") {
                return true;
            }
        }
      },
      {
        type: 'input',
        name: 'school',
        message: 'What school does the intern attend?',
        when: (selected) => {
            if (selected.role == "Intern") {
                return true;
            }
        }
      },
      {

        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Employee has been added',
        default: false
      }


    ])

.then(response => {
    let { name, email, role, github, school, confirmAddEmployee } = response;
    let Employee;

    if (role == 'Engineer') {
        Employee = new Engineer (name, id, email, github);
    } else if (role == 'Intern') {
        Employee = new Intern (name, id, email, school);
    }
employeeArray.push(Employee)

if (confirmAddEmployee) {
    return inputEmployee()
} else {
    return employeeArray;
}
})
};

inputManager()
    .then(inputEmployee)
    .then(pageHTML => {
        return generateHTML.writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    })