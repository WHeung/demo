const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.dev.conf.js')
const config = require('../config')

const compiler = webpack(webpackConfig)

const devServer = new WebpackDevServer(compiler, {
  clientLogLevel: 'warning',
  historyApiFallback: {
    rewrites: [
      { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') }
    ]
  },
  hot: true,
  contentBase: false, // since we use CopyWebpackPlugin.
  compress: true,
  open: config.dev.autoOpenBrowser,
  overlay: config.dev.errorOverlay
    ? { warnings: false, errors: true }
    : false,
  publicPath: config.dev.assetsPublicPath,
  proxy: config.dev.proxyTable,
  quiet: true, // necessary for FriendlyErrorsPlugin
  watchOptions: {
    poll: config.dev.poll
  }
})

devServer.listen(9654, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:9654')
})

const io = require('socket.io')(devServer)

io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' })
  socket.on('on my other event', (data) => {
    console.log(data)
  })
})
