const fs = require('fs')

function add(name) {
  fs.readFile(__dirname+'\\bookmarks.json','utf-8', (err, data) => {
    if(err) throw err;

    let bookmarks = JSON.parse(data);
    let path = process.cwd()
    let toDelete = null
    
    Object.keys(bookmarks).forEach((bookmark) => {
      if(bookmarks[bookmark]==path) {
        toDelete = bookmark
      }
    })

    if(toDelete) delete bookmarks[toDelete]

    bookmarks[name] = path
    fs.writeFile(__dirname+'\\bookmarks.json', JSON.stringify(bookmarks), 'utf-8', (err) => {
      if(err) throw err;
      console.log('Bookmark added successfully.')
    })
  })
}

module.exports = add
