<div align="center">
  <div><b>same-diff</b></div>
  <!-- <img src="https://user-images.githubusercontent.com/399657/68222691-6597f180-ffb9-11e9-8a32-a7f38aa8bded.png"/> -->
  <div>render text diffs in different contexts</div>
  <div><code>npm install same-diff</code></div>
  <div align="center">
    <sub>
      by
      <a href="https://github.com/spencermountain">Spencer Kelly</a> 
    </sub>
  </div>
  <img height="25px" src="https://user-images.githubusercontent.com/399657/68221824-09809d80-ffb8-11e9-9ef0-6ed3574b0ce8.png"/>
</div>

<div align="center">
  <div>
    <a href="https://npmjs.org/package/same-diff">
        <img src="https://img.shields.io/npm/v/same-diff.svg?style=flat-square" />
  </a>
  <a href="https://bundlephobia.com/result?p=same-diff">
    <img src="https://img.shields.io/bundlephobia/min/same-diff" />
  </a>
  </div>
</div>

<!-- spacer -->
<img height="15px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>

using <a href="https://github.com/antfu/diff-match-patch-es">diff-match-patch-es</a> this library compares two texts, computes the changes between them, and renders them nicely for different environents:

`npm install same-diff`

### JS API
```js
import {diffCli, diffHtml, diffConsole } from 'same-diff'

let input='the best of times'
let output='the blurst of times'

// show a nice command-line diff
diffCli(input, output)

// render a nice HTML diff
let html = diffHtml(input, output)
document.body.innerHTML = html

// show a nice diff browser dev console
diffConsole(input, output)
```

### CLI API
`npm install -g same-diff`

```bash
same-diff <input> <output>
```
MIT
