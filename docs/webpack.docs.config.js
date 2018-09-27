'use strict'
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const packageJson = require('../package.json')

const plugins = [
  new ExtractTextPlugin({
    filename: 'style.css',
    allChunks: true
  }),
  new webpack.optimize.AggressiveMergingPlugin(),
  new CopyWebpackPlugin([
    { from: './docs/lib/prism.js', to: 'prism.js' },
    { from: './docs/lib/prism.css', to: 'prism.css' },
    { from: './docs/index.html', to: 'index.html' }
  ])
]

  // build optimization plugins
  // plugins.push(new webpack.optimize.UglifyJsPlugin({
  //   //sourceMap: true,
  //   compressor: { screw_ie8: true, keep_fnames: true, warnings: false, drop_console: false },
  //   mangle: { screw_ie8: true, keep_fnames: true }
  // }))

module.exports = {
  entry: './docs/app',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/,
        // include: [
        //   path.resolve(__dirname, './src/client')
        // ],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      },

      // load styles
      {
        test: /\.(sass|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'autoprefixer-loader', 'less-loader']
        })
      },

      {
        test: /\.(css)$/,
        use: ['css-loader', 'autoprefixer-loader']
      },

      // Load images
      { test: /\.jpg/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      { test: /\.gif/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.png/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.svg/, loader: 'url-loader?limit=10000&mimetype=image/svg' },

      // Load fonts
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' }
    ]
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css'],
    alias: {
      'ssp-ui': path.resolve(__dirname, '../src/index.js')
    }
  }
}
