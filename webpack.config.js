var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      { test: /\.css$/, loader: 'style!css!'},
      { 
        test: /.js$/,
        loaders: ['react-hot', 'babel' ],
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};