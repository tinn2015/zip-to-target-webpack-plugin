# zip-to-target-webpack-plugin

把webpack的输出zip打包后输出到指定目录
用于H5离线包

```js
new ZipToTargetWebpackPlugin({
  dirList: ['20210922', 'www'],  // 目录层级
  output: 'offlinePackage'  // 输出目录
})
```