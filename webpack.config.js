const webpack = require('webpack');

module.exports = {
  entry: [`${__dirname}/src/index.js`, `${__dirname}/src/main.less`],
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
    ],
  },

  plugins: process.argv.indexOf('-p') === -1 ? [] : [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
};
