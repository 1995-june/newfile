#! /usr/bin/env node

const order = require('commander');
const concta = require('./src/concat')

order
    .command('concat <name>')
    .description('合并项目目录')
    .action(concta);

order.parse(process.argv);