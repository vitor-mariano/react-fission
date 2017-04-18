var webpack = require('webpack')
var ProvidePlugin = webpack.ProvidePlugin
var DefinePlugin = webpack.DefinePlugin

module.exports = {
  // Main file, where your project starts.
  entry: './app/scenes/index.jsx',

  // Output file, where your app should be compiled and imported by index.html.
  output: {
    path: './public/',
    publicPath: 'js/',
    filename: 'app.js'
  },

  // Compiling parameters:
  module: {
    loaders: [
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
        test: /\.scss$|\.sass$/,

        // should be converted by Sass
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.sass']
  },

  // Development server parameters:
  devServer: {
    inline: true,

    // Root folder
    contentBase: './public',

    // Port
    port: 3333,

    // Live Reload <3 Routes
    historyApiFallback: true
  },

  plugins: [
    // Environment Variables.
    new DefinePlugin({
      ENV: JSON.stringify(require('./.env.json'))
    }),

    // The React class should be a global constant, without need to be imported in every component.
    new ProvidePlugin({
      React: 'react'
    })
  ]
}
