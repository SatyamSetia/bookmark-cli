const add = require('./add.js');

function command(actions, flags) {
  switch(actions[0]) {
    case 'add': add(actions[1]);
    break;
    default: console.log('Invalid Command')
    break;
  }
}

module.exports = command
