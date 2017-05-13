var webpack = require('webpack')
var path = require('path')
var R = require('ramda')

var ProvidePlugin = webpack.ProvidePlugin
var DefinePlugin = webpack.DefinePlugin
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

var ENV = process.env.NODE_ENV

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
        // all files finished with .scss or .sass
        test: /\.css$|\.scss$|\.sass$/,

        // should be converted by Sass
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass']
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
    [
      // Environment Variables.
      new DefinePlugin({
        ENV: JSON.stringify(require('./.env.json'))
      }),

      // The React class should be a global constant, without need to be imported in every component.
      new ProvidePlugin({
        React: 'react'
      })
    ],
    R.cond([
      // Production plugins.
      [R.equals('production'), R.always([
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new UglifyJsPlugin()
      ])],

      [R.T, R.always([])]
    ])(ENV)
  )
}
