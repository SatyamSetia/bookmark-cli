const bookmarks = require('./bookmarks.json')

function goto(name, show) {
  if(!name) {
    show()
    return;
  }
  if(!bookmarks.hasOwnProperty(name)) {
    console.log(`${name} is not a valid bookmark`)
    return
  }
  let cmdStr = `start ${bookmarks[name]}`
  require('child_process').exec(cmdStr.replace(/ /g, '\\ '))
}

module.exports = goto
