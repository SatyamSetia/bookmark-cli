const fs = require('fs')
const inquirer = require('inquirer')
const goto = require('./goto.js')

function show() {
  fs.readFile(__dirname+'\\bookmarks.json','utf-8', (err, data) => {
    if(err) throw err;

    let bookmarks = JSON.parse(data);

    let choices = Object.keys(bookmarks).map((bookmark) => {
      return `${bookmark} => ${bookmarks[bookmark]}`
    })

    if(choices.length==0) {
      console.log('0 bookmarks found')
      return;
    } else {
      choices.push('None')
    }

    inquirer.prompt([
      {
        type: 'list',
        name: 'destination',
        message: 'Choose any one:',
        choices: choices,
        filter: function(val) {
          return val.split(" ")[0]
        }
      }
    ]).then(answer => {
      if(answer.destination=='None') {
        return
      }
      goto(answer.destination)
    })
  })
}

module.exports = show
