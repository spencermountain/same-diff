const green = (str) => '\x1b[32m' + str + '\x1b[0m'
const red = (str) => '\x1b[31m' + str + '\x1b[0m'
const yellow = (str) => '\x1b[33m' + str + '\x1b[0m'
const dim = (str) => '\x1b[2m' + str + '\x1b[0m'

// Check if 'process' is already defined, if not, create a shim
if (typeof process === 'undefined') {
  window.process = {}
  process.stdout = process.stdout || {}
  process.stdout.write = function (data) {
    console.log(data) // Redirect to the browser's console
  }
}

const default_options = {
  context_size: 40,
}

const printDiffCli = function (changes, input, options = {}) {
  const opts = Object.assign({}, default_options, options)

  changes.forEach((change, i) => {
    let { op, text, pos } = change
    process.stdout.write('\n')
    // console.log(yellow('\n\n- #' + (i + 1) + ' ------'))
    const start = Math.max(0, pos - opts.context_size)
    const before = input.slice(start, pos)
    const after = input.slice(
      change.pos + (change.op === -1 ? change.text.length : 0),
      change.pos + opts.context_size
    )
    process.stdout.write(dim(before))
    if (op === -1) {
      process.stdout.write(red('-' + text))
    } else if (op === 1) {
      process.stdout.write(green('+' + text))
    } else {
      process.stdout.write(yellow(' ' + text))
    }
    process.stdout.write(dim(after))
  })
  process.stdout.write('\n\n\n')
}
export default printDiffCli
