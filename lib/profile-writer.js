const generateMarkdown = profileData => {
    return `
# ${profileData.projectTitle}

[![GitHub license](https://img.shields.io/badge/license-${profileData.licenseName}-blue.svg)]

## Description
${profileData.projectDescription}

## Table of Contents
\n* [Installation](#Installation)
\n* [Usage](#Usage)
\n* [License](#License)
\n* [Contributing](#Contributing)
\n* [Test](#Test)
\n* [Questions](#Questions)

## Installation
${profileData.installationProcess}

## Usage
${profileData.projectUsage}

## License
${profileData.licenseName}

## Contributing
${profileData.contributorsGitUserName}

## Test
${profileData.tests}

## Questions

### Username: [https://github.com/${profileData.username}](https://github.com/${profileData.username})

### Email: [${profileData.email}](mailto:${profileData.email})

    `;
}

module.exports = {
    generateMarkdown : generateMarkdown
}