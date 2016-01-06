'use strict';

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|dist)/,
        loader: 'eslint-loader'
      }
    ]
  }
};
