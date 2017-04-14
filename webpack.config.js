var ProvidePlugin = require('webpack').ProvidePlugin

module.exports = {
  // Main file, where your project starts.
  entry: './app/screens/index.js',

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
        // all the files finished with .js
        test: /\.js$/,

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
        // all files finished with .scss
        test: /\.scss$/,

        // should be converted by Sass
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  // Development server parameters:
  devServer: {
    inline: true,

    // Root folder
    contentBase: './public',

    // Port
    port: 3333
  },

  plugins: [
    // The React class should be a global constant, without need to be imported in every component.
    new ProvidePlugin({
      React: 'react'
    })
  ]
}
