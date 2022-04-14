# rollup-plugin-polyfill-node-bug

The polyfill plugin is incorrectly polyfilling the npm module `qs`.

The subletly is noticed when passing a second parameter to the stringify
function. Node's querystring.stringify method has a different signature
from the npm module's function of the same name.

Node's second argument is a separator string, whereas qs expects an
options object. so building urls ends up with `[Object object]` in
the returned string.

## Reproduce error

```sh
npm ci
npm run build
npm run test:src
npm run test:cjs
npm run test:mjs
```