const add = require('./add.js');
const remove = require('./remove.js')
const clean = require('./clean.js')
const show = require('./show.js')
const goto = require('./goto.js')
const { log, warning } = require('./theme.js')

function warn(input) {
  let extraStr = input.length==1?input[0]:input.join(' ')
  
  if(input.length>=1) {
      log(warning(`WARN: '${extraStr}' is ignored.`))
  }
}

function command(actions, flags) {
  switch(actions[0]) {
    case 'add': warn(actions.splice(3))
    add(actions[1], actions[2]);
    break;
    case 'remove': warn(actions.splice(2))
    remove(actions[1])
    break;
    case 'clean': warn(actions.splice(1))
    clean()
    break;
    case 'show': warn(actions.splice(1))
    show()
    break;
    default: warn(actions.splice(1))
    goto(actions[0], show)
    break;
  }
}

module.exports = command
