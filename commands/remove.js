const fs = require('fs')

function remove(name) {
  fs.readFile(__dirname+'\\bookmarks.json','utf-8', (err, data) => {
    if(err) throw err;

    let bookmarks = JSON.parse(data);
    if(bookmarks.hasOwnProperty(name)) {
      delete bookmarks[name]
      fs.writeFile(__dirname+'\\bookmarks.json', JSON.stringify(bookmarks), 'utf-8', (err) => {
        if(err) throw err;
        console.log('Bookmark removed successfully.')
      })
      return;
    }

    console.log(`${name} is not a valid bookmark`)
  })
}

module.exports = remove
