const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern');

function Employee (){
  this.name
  this.id
  this.email
  this.manager
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
    this.manager = new Manager(managerAnswers)
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
      ${this.manager.getRole()}
      ${this.engineer.getRole()}
      ${this.intern.getRole()}
  </main>

</body>
  </html>
  `;
}



Employee.prototype.exportData = function(){
  fs.writeFile('./dist/index.html', this.printData(), err => {
    if (err) throw new Error(err);
    console.log('Website complete!');
  });
}

module.exports = Employee



  






// const { writeFile, copyFile } = require('./utils/generate-site.js')
// const generatePage = require('./src/page-template.js')

// const inquirer = require('inquirer');  // the package that allows us to use questionaire in the terminal
// const { default: generateEmptyCoverage } = require('@jest/reporters/build/generateEmptyCoverage');

// const promptUser = () => {
//     return inquirer.prompt([
//             {
//                 type:'input',
//                 name:'name',
//                 message:'What is your name? (Required)',
//                 validate: nameInput => {
//                     if (nameInput) {
//                       return true;
//                     } else {
//                       console.log('Please enter your name!');
//                       return false;
//                     }
//                   }
//             },

//             {
//                 type: 'input',
//                 name: 'github',
//                 message: 'Enter your GitHub Username'
//             },

//             {
//                 type: 'confirm',
//                 name: 'confirmAbout',
//                 message: 'Would you like to enter some information about yourself for an "About" section?',
//                 default: true
//             },

//             {
//                 type: 'input',
//                 name: 'about',
//                 message: 'Provide some information about yourself:',
//                 when: ({ confirmAbout }) => {
//                   if (confirmAbout) {
//                     return true;
//                   } else {
//                     return false;
//                   }
//                 }
//             },
//         ])
// }


// const promptProject = portfolioData => { //function accepting info from promptUser as a parameter, also adding project info below when returned below

//     // If there's no 'projects' array property, create one
//      if (!portfolioData.projects) {
//         portfolioData.projects = [];
//     }
  

//     console.log(`
//   =================
//   Add a New Project
//   =================
//   `);

//     return inquirer.prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is the name of your project? (Required)',
//         validate: projectInput => {
//             if (projectInput) {
//               return true;
//             } else {
//               console.log('Please enter your name!');
//               return false;
//             }
//           }
//       },
//       {
//         type: 'input',
//         name: 'description',
//         message: 'Provide a description of the project (Required)',
//         validate: descriptionInput => {
//             if (descriptionInput) {
//               return true;
//             } else {
//               console.log('Please enter your name!');
//               return false;
//             }
//           }
//       },
//       {
//         type: 'checkbox',
//         name: 'languages',
//         message: 'What did you build this project with? (Check all that apply)',
//         choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
//       },
//       {
//         type: 'input',
//         name: 'link',
//         message: 'Enter the GitHub link to your project. (Required)',
//         validate: linkInput => {
//             if (linkInput) {
//               return true;
//             } else {
//               console.log('Please enter your name!');
//               return false;
//             }
//           }
//       },
//       {
//         type: 'confirm',
//         name: 'feature',
//         message: 'Would you like to feature this project?',
//         default: false
//       },
//       {
//         type: 'confirm',
//         name: 'confirmAddProject',
//         message: 'Would you like to enter another project?',
//         default: false
//       }
//     ]).then(returnedData => {
//         portfolioData.projects.push(returnedData);
//         if (returnedData.confirmAddProject) {
//             return promptProject(portfolioData);
//           } else {
//             return portfolioData;
//           }
//       })
    
// };


//     promptUser() // after promptUser is complete, go to promptProject below
//     .then(promptProject)

//     .then(portfolioProjectData => { //data is now in parameter from promptProject, because of then
//       return generatePage(portfolioProjectData) //requiring the HTML content from page-template with our data, which will return the finished HTML template code into PAGEHTML

//     })
//       .then(pageHTML => { //passing PAGEHTML into newly created writeFile(), which returns a promise from GENERATE-SITE.js
//         return writeFile(pageHTML)
//       })  

//       .then(writeFileResponse => { // Upon a successful file creation, we take the writeFileResponse object provided by the writeFile() function's resolve() execution to log it, and then we return copyFile(), to provide the css file. 
//         console.log(writeFileResponse);
//         return copyFile();
//       })
//       .then(copyFileResponse => {
//         console.log(copyFileResponse)
//       })
//       .catch(err =>{ //catch our errors
//         console.log(err)
//       })

      

    









