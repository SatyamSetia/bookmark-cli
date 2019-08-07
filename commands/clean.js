const fs = require('fs')
const { log, success } = require('./theme.js')

function clean() {
  fs.writeFile(__dirname+'\\bookmarks.json', JSON.stringify({}), 'utf-8', (err) => {
    if(err) throw err;

    log(success(`SUCCESS: Bookmarks cleared successfully.`))
  })
}

module.exports = clean
