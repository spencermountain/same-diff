import { diffCli, diffHtml, diffConsole } from './src/index.js'

let input = 'it was the best of times'
let output = 'it was the blurst of times'

// show a nice command-line diff
diffCli(input, output)
