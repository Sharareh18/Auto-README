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
  } else {
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
  else {
    return ``;
  }
};


// Function returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License ${license}`
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
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}`;
};

module.exports = generateMarkdown;
