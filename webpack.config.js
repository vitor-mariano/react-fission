const {
  DefinePlugin,
  ProvidePlugin,
} = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const environment = process.env.NODE_ENV || 'development';

let plugins = [
  new Dotenv(),
  new DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(environment),
  }),
  new ProvidePlugin({
    React: 'react',
  }),
];

if (environment === 'production') {
  plugins = plugins.concat([
    new UglifyJsPlugin(),
  ]);
}

module.exports = {
  entry: './app/scenes/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-3'],
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 8000,
    historyApiFallback: true,
  },
  devtool: 'source-map',
  plugins,
};
