import { diff } from 'diff-match-patch-es'
import toCli from './fmts/diff-cli.js'
import toHtml from './fmts/diff-html.js'
import toConsole from './fmts/diff-console.js'
import { getChanges } from './_lib.js'

const diffCli = function (input, output, options) {
  let diffs = diff(input, output)
  let changes = getChanges(diffs)
  toCli(changes, input, options)
}

const diffConsole = function (input, output, options) {
  let diffs = diff(input, output)
  let changes = getChanges(diffs)
  toConsole(changes, input, options)
}

const diffHtml = function (input, output, options) {
  let diffs = diff(input, output)
  let changes = getChanges(diffs)
  return toHtml(changes, input, options)
}

export { diffCli, diffHtml, diffConsole }
