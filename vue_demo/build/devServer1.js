const express = require('express')
const webpack = require('webpack')
const path = require('path')
const http = require('http')
const config = require('../config')
const webpackConfig = require('./webpack.base.conf')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const history = require('connect-history-api-fallback')

// html-webpack-plugin和chunkhash有冲突，所以这里要改成hash
webpackConfig.output.filename = '[name].[hash].js'
webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': require('../config/dev.env')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
  // https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true
  }),
  // copy custom static assets
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '../static'),
      to: config.dev.assetsSubDirectory,
      ignore: ['.*']
    }
  ])
)
webpackConfig.entry.app = ['webpack-hot-middleware/client', './src/main.js']

var app = express()
app.use(history())

var compiler = webpack(webpackConfig)

var devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: '/',
  stats: {
    colors: true,
    chunks: false
  },
  watchOptions: {
    poll: true
  }
})

var hotMiddleware = webpackHotMiddleware(compiler)

app.use(devMiddleware)
app.use(hotMiddleware)

app.listen(9654, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:9654')
})

const io = require('socket.io')(9655, {
  path: '/',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
})

io.on('connection', (socket) => {
  socket.emit('emit_input', { text: '你好，请问我可以打死你吗？' })
  socket.on('emit_input', (data) => {
    socket.emit('emit_input', { text: data + '? 不存在的' })
  })
})
