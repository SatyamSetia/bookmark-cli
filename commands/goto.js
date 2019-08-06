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
  
  require('child_process').exec("%SystemRoot%\\explorer.exe \"" + bookmarks[name] + "\"")
}

module.exports = goto
