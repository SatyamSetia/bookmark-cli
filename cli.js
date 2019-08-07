#!/usr/bin/env node

const meow = require('meow')
const command = require('./commands/index')

const cli = meow(`
  Usage
    $ bm [command] [options]
  Options
    --help
    --version
  Commands
    add -> Add a new bookmark.
          NOTE: If you are adding custom path and it contains spaces then enclose it in double quotes.
    clean -> Delete all existing bookmarks.
    remove -> Delete a specific bookmark.
    show -> Show all bookmarks.
  Example
    bm mybookmark -> It will open file/folder with bookmark name 'mybookmark'.
  `,{
    alias: {
      h: 'help',
      v: 'version'
    }
  });

command(cli.input, cli.flags)
