'use strict'
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new ExtractTextPlugin({
    filename: 'style.css',
    allChunks: false
  }),
  new webpack.optimize.AggressiveMergingPlugin()
]

  // build optimization plugins
plugins.push(new webpack.optimize.UglifyJsPlugin({
    // sourceMap: true,
  compressor: { screw_ie8: true, keep_fnames: true, warnings: false, drop_console: false },
  mangle: { screw_ie8: true, keep_fnames: true }
}))

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'ssp-ui.umd.js',
    library: 'ssp-ui.umd.js',
    libraryTarget: 'umd'
  },
  externals: [
    nodeExternals()
  ],
  module: {
    rules: [
      { test: /\.jsx?$/,
        // include: [
        //   path.resolve(__dirname, './src/client')
        // ],
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0', 'react']
          }
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
    extensions: ['.js', '.jsx', '.less', '.css']
  }
}
