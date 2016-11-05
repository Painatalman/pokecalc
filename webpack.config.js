// basic setup
var path = require('path');
var webpack = require('webpack');

// Webpack plugins
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:8080/',
    // 'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/main.js')
  ],
   output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
  // preloaders will be replaced with enforce: pre in the loaders section
    preLoaders: [
      {
        test: /.jsx?$/,
        loader: 'eslint-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }, 
      {
        test: /\.css$/,
        loader: 'stylelint',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ],
     loaders: [
    
      {
      test: /.jsx?$/,
      loader: 'babel-loader',
      include: [
        path.resolve(__dirname, 'src')
      ]
    }, {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader?modules&importLoaders=1',
        'postcss-loader'
      ],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.json$/,
      loaders: [
        'json-loader'
      ],
      include: path.join(__dirname, 'data')
    }] 
  },
  resolve: {
    alias: {vue: 'vue/dist/vue.js'}
},
  postcss: function() {
    var plugins = require('./postcss.config.js').plugins;
    return plugins;
  },
  eslint: {
        failOnWarning: false,
        failOnError: true,
        configFile: '.eslintrc'
    }
};
