const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index:'./src/index.js',
    about: './src/about.js'
  },

  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/pages/index.html'), 
    filename: 'index.html',
    chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/about.html'), 
      filename: 'about.html', 
      chunks: ['exampleEntry']
      }),
    new CleanWebpackPlugin(),
    

    ], 
    module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        type: 'asset/resource'
      },
    ],
  },
  
};