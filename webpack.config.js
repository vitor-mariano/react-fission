var webpack = require('webpack')
var path = require('path')
var Dotenv = require('dotenv-webpack')
var R = require('ramda')

var ProvidePlugin = webpack.ProvidePlugin
var DefinePlugin = webpack.DefinePlugin
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

module.exports = {
  // Main file, where your project starts.
  entry: './app/scenes/index.jsx',

  // Output file, where your app should be compiled and imported by index.html.
  output: {
    path: path.join(__dirname, "public"),
    filename: 'app.js'
  },

  // Compiling parameters:
  module: {
    rules: [
      {
        // all the files finished with .js or .jsx
        test: /\.jsx?$/,

        // except the node_modules folder
        exclude: /node_modules/,

        // should be converted by Babel
        loader: 'babel-loader',

        // using ES2015 and React presets
        query: {
          presets: ['es2015', 'react', 'stage-3']
        }
      },
      {
        // all files finished with .css or .scss
        test: /\.s?css$/,

        // should be converted by Sass
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },

  // Development server parameters:
  devServer: {
    inline: true,

    // Root folder
    contentBase: './public',

    // Port
    port: 8000,

    // Live Reload <3 Routes
    historyApiFallback: true
  },

  devtool: 'source-map',

  plugins: R.concat(
    // Any environment plugins.
    [
      // Load environment variables.
      new Dotenv(),

      // Add NODE_ENV.
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),

      // The React class should be a global constant, without need to be imported in every component.
      new ProvidePlugin({
        React: 'react'
      })
    ],

    // Specific environment plugins.
    R.cond([
      // Production plugins.
      [R.equals('production'), R.always([
        new UglifyJsPlugin()
      ])],

      // Fallback
      [R.T, R.always([])]
    ])(process.env.NODE_ENV)
  )
}
