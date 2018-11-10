const path = require('path');

module.exports = {
  entry: {
    main: './server/main.js',
    about: './server/about/about.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/assets/js'),
    publicPath: '/assets/js/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    contentBase: './server'
  },
};
