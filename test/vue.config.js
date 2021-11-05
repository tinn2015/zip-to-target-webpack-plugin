var MyPlugin = require('../index')

module.exports = {
  configureWebpack: {
    plugins: [
      new MyPlugin({
        dirList: ['20210922', 'www'],
        output: 'offlinePackage'
      })
    ]
  }
}