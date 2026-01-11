#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import fs from 'fs'
import { diffCli } from 'same-diff'

let cli = yargs(hideBin(process.argv.slice(2)))
  .option('fmt', {
    type: 'string',
    description: 'how to format the output',
    default: 'cli',
  })
  .parse(process.argv.slice(2))

if (cli.version) {
  console.log(pkg.version)
  process.exit(0)
}

if (cli.help) {
  console.log(`
  Usage: same-diff <input> <output> [options]

  Options:
    --fmt      lint the file
  `)
  process.exit(0)
}

let inputFile = cli._[0]
let outputFile = cli._[1]

let input = fs.readFileSync(inputFile, 'utf8')
let output = fs.readFileSync(outputFile, 'utf8')
// show a nice command-line diff
diffCli(input, output)
