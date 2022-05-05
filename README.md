# Learning Lit.js [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://github.com/hchiam/learning-lit/blob/main/LICENSE)

Just one of the things I'm learning. https://github.com/hchiam/learning

https://lit.dev

https://lit.dev/docs/getting-started

https://lit.dev/tutorial

https://lit.dev/playground

- Native web components, custom tags with `@customElement()`.
- No virtual tree to diff with the DOM.
- Works with/without frameworks = shareable and future-ready.
- Scoped styles with `static styles = css`.
- Reactive properties with `@property()`
- Native HTML and JS expressions, so no compilation required for templates.

```sh
npm i lit
```

or with [`yarn`](https://github.com/hchiam/learning-yarn):

```sh
yarn add lit
```

Then to quickly serve the example, install [`parcel`](https://github.com/hchiam/learning-parcel) globally (so not specifically for this project):

```sh
npm install -g parcel-bundler
# or:
yarn global add parcel
```

Then to run the demo example in this GitHub repo:

```sh
npm run start
# or just:
yarn dev
```

To get the demo to work, I also needed to run `yarn add @babel/plugin-proposal-decorators` and add the `.babelrc` file.

## Another tutorial

https://blog.openreplay.com/build-a-lightweight-web-component-with-lit-js

```sh
git clone https://github.com/lit/lit-element-starter-js.git
cd lit-element-starter-js
npm i
npm run serve
```
