const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern');

function Employee (){
  this.name
  this.id
  this.email
  this.manager = []
  this.intern
  this.engineer
}

Employee.prototype.addType = function(){
  inquirer.prompt({
    type: 'list',
    name: 'addcollague',
    message: 'Which type of employee would you like to add?',
    choices: ['Engineer','Intern','Manager']
  })
  .then(({ addcollague }) => {
    if(addcollague === 'Manager'){
      this.addManager();
    }

    if(addcollague === 'Engineer'){
      this.addEngineer();
    }
    if(addcollague === 'Intern'){
      this.addIntern();
    }
  })
}

Employee.prototype.addManager = function(){
  inquirer.prompt([
  {
    type: "text",
    name: 'name',
    message: "What is the team manager's name?",
    validate: managerInput => {
      if (managerInput) {
        return true;
      } else {
        console.log('You need a manager name!');
        return false;
      }
    }
  },

  {
    type: "text",
    name: 'id',
    message: "What is the team manager's ID?",
    validate: managerID => {
      if (managerID) {
        return true;
      } else {
        console.log('You need an ID!');
        return false;
      }
    }
  },

  {
    type: "text",
    name: 'email',
    message: "What is the team manager's email?",
    validate: managerEmail => {
      if (managerEmail) {
        return true;
      } else {
        console.log('You need a manager email!');
        return false;
      }
    }
  },

  {
    type: "text",
    name: 'office',
    message: "What is the team manager's office",
  }

  ]).then(managerAnswers => {
    this.manager.push(new Manager(managerAnswers))
    this.confirmAdd();
  })
}

Employee.prototype.addEngineer = function (){
  inquirer.prompt([
    {
      type: "text",
      name: 'name',
      message: "What is the engineer's name?",
      validate: engineerName => {
        if (engineerName) {
          return true;
        } else {
          console.log('You need a name!');
          return false;
        }
      }
    },

    {
      type: "text",
      name: 'id',
      message: "What is the engineer's ID?",
      validate: engineerID => {
        if (engineerID) {
          return true;
        } else {
          console.log('You need an ID!');
          return false;
        }
      }
    },

    {
      type: "text",
      name: 'email',
      message: "What is the engineer's email?",
      validate: engineerEmail => {
        if (engineerEmail) {
          return true;
        } else {
          console.log('You need an email!');
          return false;
        }
      }
    },

    {
      type: "text",
      name: 'github',
      message: "What is the engineer's github username?",
      validate: engineerGithub => {
        if (engineerGithub) {
          return true;
        } else {
          console.log('You need a github usernamel!');
          return false;
        }
      }
    }
    
  ]).then(engineerAnswers => {
    this.engineer = new Engineer(engineerAnswers)
    this.confirmAdd();
  }) 
}

Employee.prototype.addIntern = function (){
  inquirer.prompt([
    {
      type: "text",
      name: 'name',
      message: "What is the intern's name?",
      validate: internName => {
        if (internName) {
          return true;
        } else {
          console.log('You need a name!');
          return false;
        }
      }
    },

    {
      type: "text",
      name: 'id',
      message: "What is the intern's ID?",
      validate: internID => {
        if (internID) {
          return true;
        } else {
          console.log('You need an ID!');
          return false;
        }
      }
    },

    {
      type: "text",
      name: 'email',
      message: "What is the intern's email?",
      validate: internEmail => {
        if (internEmail) {
          return true;
        } else {
          console.log('You need an email!');
          return false;
        }
      }
    },

    {
      type: "text",
      name: 'school',
      message: "What is the intern's school?",
    }
    
  ]).then(internAnswers => { 
    this.intern = new Intern(internAnswers)
    this.confirmAdd() 
  })
}
  
Employee.prototype.confirmAdd = function(){
  inquirer.prompt({
    type: 'confirm',
    name: 'addemployee',
    message: 'Would you like to add an employee?',
    default: false
  })
  .then(({ addemployee }) => {

    if (!addemployee){
      console.log("Your team is complete")
      this.printData();
      this.exportData();
    } else {
      this.addType()
    }
  });  
}

Employee.prototype.printData = function () {
  // if(this.manager){
  //   var managerHTML = this.manager.getRole()
  // } else {
  //   var managerHTML = ""
  // }

  // let managerHTML = this.manager ? this.manager.getRole() : ""

  var managerHTML = this.manager
    .map(function(manager){
        return manager.getRole()
        
    }).join("\n")



  if(this.engineer){
    var engineerHTML = this.engineer.getRole()
  }  else {
    var engineerHTML = ""
  }

  if(this.intern){
    var internHTML = this.intern.getRole()
  } else {
    var internHTML = ""
  }

  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
  </head>

  <body>
  <header>
    <div class="container flex-row justify-space-between align-center py-3">
      <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
     
    </div>
  </header>
  
  <main class="container my-5"> 
      ${managerHTML}
      ${engineerHTML}
      ${internHTML}
  </main>

</body>
  </html>
  `;
}

Employee.prototype.exportData = function(){
  fs.writeFile('./dist/index.html', this.printData(), err => {
    if (err) throw new Error(err);
    console.log('Website complete! Load index.html under "dist" to your browser to see your page!');
  });
}

module.exports = Employee
