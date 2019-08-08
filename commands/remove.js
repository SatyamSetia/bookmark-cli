const fs = require('fs')
const { log, error, success } = require('./theme.js')

function remove(name) {
  if(!name) {
    log(error(`ERR: Bookmark name cannot be empty. Check 'bm --help' for more help.`))
    return;
  }
  fs.readFile(__dirname+'\\bookmarks.json','utf-8', (err, data) => {
    if(err) throw err;

    let bookmarks = JSON.parse(data);

    if(bookmarks.hasOwnProperty(name)) {
      delete bookmarks[name]
      fs.writeFile(__dirname+'\\bookmarks.json', JSON.stringify(bookmarks), 'utf-8', (err) => {
        if(err) throw err;
        log(success(`SUCCESS: '${name}' removed successfully.`))
      })
      return;
    }

    log(error(`ERR: '${name}' is not a bookmark.`))
  })
}

module.exports = remove
