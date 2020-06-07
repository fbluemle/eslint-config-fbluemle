# eslint-config-fbluemle

[![ci][1]][2]

## Description

A simplified ESLint config based on [@react-native-community][3]. These are just
the **core ESLint rules**, with all dependencies on other configs/plugins removed.

## Installation

```sh
yarn add --dev eslint @fbluemle/eslint-config
```

## Usage

Add to your ESLint config (`.eslintrc[.js]`, or `eslintConfig` field in `package.json`):

```js
module.exports = {
  extends: '@fbluemle',
};
```

## License

MIT

[1]: https://github.com/fbluemle/eslint-config-fbluemle/workflows/ci/badge.svg
[2]: https://github.com/fbluemle/eslint-config-fbluemle/actions
[3]: https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community
