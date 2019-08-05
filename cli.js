#!/usr/bin/env node

const meow = require('meow')
const command = require('./commands/index')

const cli = meow(`
  Usage
    $ bm [command] [options]
  Options
    -h, --help
    -v, --version
  `,{
    alias: {
      h: 'help',
      v: 'version'
    }
  });

command(cli.input, cli.flags)
