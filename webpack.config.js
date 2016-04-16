var webpack = require('webpack');
var path = require('path');

var BUILD_PATH = path.resolve(__dirname, 'dist');
var APP_PATH = path.resolve(__dirname, 'src/app/components');

var config = {
  // entry for server and main jsx file
  entry: [
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/dev-server',
    APP_PATH + '/table.jsx'
  ],
  // output for bundle file and local server path
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      // react converter
      {test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: {presets: ['react', 'es2015']}},
      // bootstrap include
      {test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery'},
      // font converter
      {test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"},
      {test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: "url"},
      // style converter and include
      {test: /\.scss$/, loader: "style!css!sass"},
      // sound files wav converter
      {test: /\.wav$/, loader: "file"},
      {test: /\.mp3$/, loader: "file"}
    ]
  },
  plugins: [
    // plugins for hot reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  watch: true
};

// export settings
module.exports = config;
