const fs = require('fs')
const { log, error, success } = require('./theme.js')

function add(name, bmpath) {
  fs.readFile(__dirname+'\\bookmarks.json','utf-8', async (err, data) => {
    if(err) throw err;

    let bookmarks = JSON.parse(data);

    if(bookmarks.hasOwnProperty(name)) {
      log(error(`ERR: '${name}' is already a bookmark. Please choose a different name.`))
      return;
    }

    if(!bmpath) {
      bmpath = process.cwd()
    } else {
      if(!fs.existsSync(bmpath)) {
        log(error(`ERR: '${bmpath}' is not a valid path`))
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
      log(success(`SUCCESS: '${name}' added successfully.`))
    })
  })
}

module.exports = add
