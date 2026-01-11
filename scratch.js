import { diffCli, diffHtml, diffConsole } from './src/index.js'

let input = 'the best of times'
let output = 'the blurst of times'

// show a nice command-line diff
diffCli(input, output)

// render a nice HTML diff
// let html = diffHtml(input, output)
// console.log(html)

// show a nice diff browser dev console
// diffConsole(input, output)
