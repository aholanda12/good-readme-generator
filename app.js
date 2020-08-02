const inquirer = require('inquirer');
const fs = require('fs');
const profileWriter = require('./lib/profile-writer');
const questionsArr = require('./lib/questions')

inquirer.prompt(questionsArr).then(responseObj => {
    // console.log(responseObj);
    const finishedMarkdown = profileWriter.generateMarkdown(responseObj);

    fs.writeFile('./README.md', finishedMarkdown, err =>{
        if(err){
            console.log(err)
        } else {
            console.log('Great Success!')
        }
    });
})