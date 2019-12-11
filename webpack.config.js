var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var PUB_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUB_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: 'react'
        }
      }
    ]
  }
};