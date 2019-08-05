const fs = require('fs')

function clean() {
  fs.writeFile(__dirname+'\\bookmarks.json', JSON.stringify({}), 'utf-8', (err) => {
    if(err) throw err;

    console.log('All bookmarks cleared')
  })
}

module.exports = clean
