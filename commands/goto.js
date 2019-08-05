const bookmarks = require('./bookmarks.json')

function goto(name) {
  if(!bookmarks.hasOwnProperty(name)) {
    console.log(`${name} is not a valid bookmark`)
    return
  }
  require('child_process').exec('start '+bookmarks[name])
}

module.exports = goto
