const add = require('./add.js');
const goto = require('./goto.js')

function command(actions, flags) {
  switch(actions[0]) {
    case 'add': add(actions[1]);
    break;
    default: goto(actions[0])
    break;
  }
}

module.exports = command
