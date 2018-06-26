var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './client/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [
              'react',
              'stage-0',
              ['env', { targets: { browsers: ['last 2 versions'] } }]
            ]
          }
    },
    {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]
    }]
  }
};