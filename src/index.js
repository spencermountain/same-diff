import { diff } from 'diff-match-patch-es'
import diffCli from './fmts/diff-cli.js'
import diffHtml from './fmts/diff-html.js'
import diffConsole from './fmts/diff-console.js'
import { getChanges } from './fmts/_lib.js'

const diffCli = function (input, output, options) {
  let diffs = diff(input, output)
  let changes = getChanges(diffs)
  diffCli(changes, input, options)
}

const diffConsole = function (input, output, options) {
  let diffs = diff(input, output)
  let changes = getChanges(diffs)
  diffConsole(changes, input, options)
}

const diffHtml = function (input, output, options) {
  let diffs = diff(input, output)
  let changes = getChanges(diffs)
  return diffHtml(changes, input, options)
}

export { diffCli, diffHtml, diffConsole }
