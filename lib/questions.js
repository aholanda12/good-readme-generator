const questionsArr = [
    {
        type: "input",
        message: "What is your Project Title?",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Please provide a detailed description of your project",
        name: "projectDescription"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installationProcess"
    },
    {
        type: "input",
        message: "What use does your project have?",
        name: "projectUsage"
    },
    {
        type: "list",
        message: "What is the License name?",
        name: "licenseName",
        choices: [
          "Apache 2.0",
          "Boost 1.0",
          "IPL 1.0",
          "ISC",
          "MIT",
          "MPL 2.0",
          "Perl",
          "OFL 1.1",
          "Unlicense",
          "Zlib"
        ]
      },
    {
        type: "input",
        message: "Please provide contributor names.",
        name: "contributorsGitUserName"
    },
    {
        type: "input",
        message: "Provide examples on how to run tests.",
        name: "tests"
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        validate: nameInput => {
            if (nameInput.length) {
                return true;
            }
            return 'Your name is too short! or empty';
        }
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: emailInput => {
            return (/^.+@.+\..+$/gi.test(emailInput) ? true : `That's not an email!`)
        }
    }
];

module.exports = questionsArr;