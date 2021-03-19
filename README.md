# Bundling Files With Dynamic Paths and Require in Rollup

This repo is a test to try and bundle files with the use of require, specificlly `JSON` files.

So far I have learned that:

1. `@rollup/plugin-node-resolve` is needed to resolve the file path for eg. `require('./package.json')`
2. If bundling TypeScript files, you need to add the file exention to `@rollup/plugin-commonjs`. For example `commonjs(extensions: ['.js', '.ts']})`
3. `rollup-plugin-polyfill-node `needs options nodePolyfills({ include: null })` to include `process.cwd()`
4. If you want to bundle `JSON` files you need to add `@rollup/plugin-json`

## Issues

Applying all of these plugins cause one or more not to work in some regard or another, and the result is that the output will not work in the browser.

## Buiding/testing

Just run:

```bash
npm run build
```