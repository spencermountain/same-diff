const default_options = {
  context_size: 40,
  green_color: '#64a166',
  red_color: '#b54545',
  yellow_color: '#dbda81',
}

// log to browser devtools console
const printDiffConsole = function (changes, input, options = {}) {
  const opts = Object.assign({}, default_options, options)
  changes.forEach((change, i) => {
    let { op, text, pos } = change
    const start = Math.max(0, pos - opts.context_size)
    const before = input.slice(start, pos)
    const after = input.slice(
      change.pos + (change.op === -1 ? change.text.length : 0),
      change.pos + opts.context_size
    )
    // console.log('%c' + before, 'color: lightgrey; font-style: italic;')
    if (op === -1) {
      console.log(
        before + '%c-' + text,
        `color: white; background-color: ${opts.red_color}; padding: 2px,`,
        after
      )
    } else if (op === 1) {
      console.log(
        before + '%c+' + text,
        `color: white; background-color: ${opts.green_color}; padding: 2px;`,
        after
      )
    } else {
      console.log(
        before + '%c ' + text,
        `color: white; background-color: ${opts.yellow_color}; padding: 2px;`,
        after
      )
    }
  })
}

export default printDiffConsole
