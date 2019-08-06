const fs = require('fs')

function add(name, bmpath) {
  fs.readFile(__dirname+'\\bookmarks.json','utf-8', async (err, data) => {
    if(err) throw err;

    let bookmarks = JSON.parse(data);

    if(!bmpath) {
      bmpath = process.cwd()
    } else {
      if(!fs.existsSync(bmpath)) {
        console.log(`${bmpath} is not a valid path`)
        return;
      }
    }

    let toDelete = null

    Object.keys(bookmarks).forEach((bookmark) => {
      if(bookmarks[bookmark]==bmpath) {
        toDelete = bookmark
      }
    })

    if(toDelete) delete bookmarks[toDelete]

    bookmarks[name] = bmpath
    fs.writeFile(__dirname+'\\bookmarks.json', JSON.stringify(bookmarks), 'utf-8', (err) => {
      if(err) throw err;
      console.log('Bookmark added successfully.')
    })
  })
}

module.exports = add
