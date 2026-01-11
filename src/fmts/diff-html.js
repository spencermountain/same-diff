const context_size = 40

const default_options = {
  context_size: context_size,
  green_color: '#64a166',
  red_color: '#b54545',
  yellow_color: '#dbda81',
}

const diffHtml = function (changes, input, options = {}) {
  const opts = Object.assign({}, default_options, options)

  let html = ''
  changes.forEach((change, i) => {
    let { op, text, pos } = change
    // html += `<div class="diff-header" style="color:lightgrey;"> #${i + 1}</div>\n\n`
    const start = Math.max(0, pos - opts.context_size)
    const before = input.slice(start, pos)
    const after = input.slice(
      change.pos + (change.op === -1 ? change.text.length : 0),
      change.pos + opts.context_size
    )
    html += '<div class="diff-each">'
    html += `<span class='diff-before'>${before}</span>\n`
    if (op === -1) {
      html += `<span class='diff diff-minus' style="color:${opts.red_color}">-${text}</span>\n`
    } else if (op === 1) {
      html += `<span class='diff diff-plus' style="color:${opts.green_color}">+${text}</span>\n`
    } else {
      html += `<span class='diff diff-change' style="color:${opts.yellow_color}"> ${text}</span>\n`
    }
    html += `<span class='diff-after'>${after}</span>\n`
    html += '</div>'
  })
  return '<div class="diff-container">\n' + html + '\n</div>'
}
export default diffHtml
