const add = require('./add.js');
const remove = require('./remove.js')
const clean = require('./clean.js')
const show = require('./show.js')
const goto = require('./goto.js')

function command(actions, flags) {
  switch(actions[0]) {
    case 'add': add(actions[1], actions[2]);
    break;
    case 'remove': remove(actions[1])
    break;
    case 'clean': clean()
    break;
    case 'show': show()
    break;
    default: goto(actions[0], show)
    break;
  }
}

module.exports = command
