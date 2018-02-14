const {
  DefinePlugin,
  ProvidePlugin,
} = require('webpack');
const R = require('ramda');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const environment = process.env.NODE_ENV || 'development';

let plugins = [
  new DefinePlugin({
    'process.env': R.mapObjIndexed(JSON.stringify, process.env),
  }),
  new DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(environment),
  }),
  new ProvidePlugin({
    React: 'react',
  }),
];

if (environment !== 'production') {
  plugins = plugins.concat([
    new Dotenv(),
  ]);
}

if (environment === 'production') {
  plugins = plugins.concat([
    new UglifyJsPlugin(),
  ]);
}

module.exports = {
  entry: './app/index.jsx',
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
          plugins: [
            'ramda',
            'transform-react-jsx',
            [
              'react-css-modules',
              {
                filetypes: {
                  '.scss': {
                    syntax: 'postcss-scss',
                    plugins: ['postcss-nested'],
                  },
                },
              },
            ],
          ],
        },
      },
      {
        test: /\.s?css$/,
        exclude: /app\/styles\/global\/.*\.s?css$/,
        use: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass-loader',
        ],
      },
      {
        test: /app\/styles\/global\/.*\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  devServer: {
    inline: true,
    contentBase: './public',
    host: '0.0.0.0',
    port: 8000,
    historyApiFallback: true,
  },
  devtool: 'source-map',
  plugins,
};
