// Function returns a license badge based on which license is passed in
// If there is no license, it returns an empty string

function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else {
  }
  if (license === 'GNU General Public License v3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
  }
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'N/A') {
    return ``;
  }
};

// Function returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  else if (license === 'GNU General Public License v3.0') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
  else if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  else if (license === 'N/A') {
    return ``;
  }
};


// Function returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is covered under the following license: ${license}`
  } else {
    return ``;
  }
}

// Function generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  ### For questions regarding this project please feel free to take a look 
  at my GitHub profile [${data.github}](https://github.com/${data.github}) or contact me via email: 
  ${data.email}`;
};

module.exports = generateMarkdown;
