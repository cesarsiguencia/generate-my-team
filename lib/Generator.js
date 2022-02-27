const inquirer = require('inquirer');

const Manager = require('./Manager')

function Generator (){
  managerInfo = {};
  employeesArray = [];
  this.value = 0 
}

Generator.prototype.managerPrompt = function () {
  inquirer.prompt([
    {
      type: "text",
      name: 'managername',
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
      name: 'managerID',
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
      name: 'manageremail',
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
      name: 'manageroffice',
      message: "What is the team manager's office",
    }

    ]).then(answers => {
      console.log(answers);
      
      managerInfo.name = answers.managername;
      managerInfo.id = answers.managerID;
      managerInfo.email = answers.manageremail;
      managerInfo.office = answers.manageroffice;

      console.log(managerInfo);
    
    })

    

}



module.exports = Generator



  






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

      

    









