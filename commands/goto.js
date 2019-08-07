const bookmarks = require('./bookmarks.json')
const { log, error } = require('./theme.js')

function goto(name, show) {
  if(!name) {
    show()
    return;
  }
  if(!bookmarks.hasOwnProperty(name)) {
    log(error(`ERR: '${name}' is not a bookmark.`))
    return
  }

  require('child_process').exec("%SystemRoot%\\explorer.exe \"" + bookmarks[name] + "\"")
}

module.exports = goto
