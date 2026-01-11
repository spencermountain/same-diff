const getChanges = function (diffs) {
  const changes = []
  let pos = 0

  for (const [op, text] of diffs) {
    if (op !== 0) {
      changes.push({ op, text, pos })
    }
    if (op !== 1) {
      pos += text.length
    }
  }

  return changes
}

export { getChanges }
