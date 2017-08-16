// Old Webpack Configuration (ver. 1.12.9)
/*
module.exports = {
    entry: [
      './src/index.js'
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          exclude: /node_modules/,
          loader: 'babel',
          query: {
              presets: ['react', 'es2015', 'stage-1']
          }
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
};
*/


// New Webpack Configuration
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');

const config = {

  // context: `${__dirname}/src`,

  // Entry point of our app
  // Starts the module building process and 
  // creates a graph of all application dependencies
  entry: './src/index.js',

  // Tells Webpack where to save the bundled file
  // Must provide an absolute file path and a filename
  // __dirname is a constant in nodeJS, and refers to 
  // the current working directory (cwd)
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
        ForecastHourly: 'components/forecasthourly',
        SearchBar: 'containers/search_bar',
        WeatherList: 'containers/weather_list'
    },
    extensions: ['.js', '.jsx', '.json']
  },

  // Module Loaders
  // 1. Uses the test property to identify which files need to be 
  // tansformed by the loader
  // 2. Transform these files so they can be added to the dependency graph
  module: {
    rules: [
      { 
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
           plugins: ['transform-class-properties']
        }
      },
      { 
        use: ['style-loader','css-loader'],
        test: /\.css$/  
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Webpack 2',
  //     filename: 'index.html',
  //     template: './templates/tmp.html'
  //   })
  // ]
  // plugins: [
  //   new UglifyJsPlugin({
  //     sourceMap: true
  //   })
  // ]
  
};

module.exports = config;


