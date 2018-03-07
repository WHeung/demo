var path = require('path')
var webpack = require('webpack')
var HTMLPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
  mode: 'development',
  plugins: [
    new HTMLPlugin({
      template: 'index.html',
      filename: path.resolve(__dirname, 'dist/index.html')
    })
  ]
}