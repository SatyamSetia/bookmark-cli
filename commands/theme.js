const chalk = require('chalk')
const log = console.log;

const error = chalk.bold.red;
const warning = chalk.keyword('orange')
const success = chalk.green

module.exports = {
  log,
  error,
  warning,
  success
}
