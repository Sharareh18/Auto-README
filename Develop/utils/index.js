const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require(`./generateMarkdown.js`);

// TODO: Include packages needed for this application

// User input for README title, description, installation instructions, usage information, contribution guidelines, test instructions
// license, user GitHub handle, user email.
const questions = () => {
    return inquirer.prompt([
   
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter project description:",
        name: "description",
    },
    {
        type: "input",
        message: "Enter installation instruction:",
        name: "installation",
    },
    {
        type: "input",
        message: "Enter usage information:",
        name: "usage",
    },
    {
        type: "input",
        message: "Enter contribution guidelines:",
        name: "contribution",
    },
    {
        type: "input",
        message: "Enter test instructions:",
        name: "test",
    },
    {
        type: "list",
        message: "Select a license:",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT",
        ],
        name: "license",
    },
    {
        type: "input",
        message: "Enter GitHub handle:",
        name: "github",
    },
    {
        type: "input",
        message: "Enter your email:",
        name: "email",
    },

])
.then((answers) => {
    const readmeContent = generateMarkdown(answers);

    fs.writeFile('newREADME.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });
};


// TODO: Create a function to write README file
// function writeToFile(title, data) { 
//     fs.writeFile(`${title}.md`, data, (err) =>
//       err ? console.log(err) : console.log('Successfully created README!')
//     );
// }
// TODO: Create a function to initialize app
// function init() { 
  
// }
    

// Function call to initialize app
questions();
