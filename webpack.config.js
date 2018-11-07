const path = require('path');

module.exports = {
  entry: './client/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public/assets/js/'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: false,
    port: 8080
  }
};
