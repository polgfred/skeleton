let path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    main: './src/main.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader' ],
        exclude: [ path.resolve(__dirname, 'node_modules') ]
      }, {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?importLoaders=1', 'postcss-loader' ]
      }
    ]
  }
};
