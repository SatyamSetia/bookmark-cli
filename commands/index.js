const add = require('./add.js');
const remove = require('./remove.js')
const goto = require('./goto.js')

function command(actions, flags) {
  switch(actions[0]) {
    case 'add': add(actions[1]);
    break;
    case 'remove': remove(actions[1])
    break;
    default: goto(actions[0])
    break;
  }
}

module.exports = command
