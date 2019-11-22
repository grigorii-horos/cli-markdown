#!/usr/bin/env node

const fs = require('fs');
const concat = require('concat-stream');

const cliMarkdown = require('../');


const input = process.argv.length > 2
  ? fs.createReadStream(process.argv[2])
  : process.stdin;

input.pipe(concat((html) => {
  process.stdout.write(cliMarkdown(html.toString()));
}));
