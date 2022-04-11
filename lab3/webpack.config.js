const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//var CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const WriteFilePlugin  = require('write-file-webpack-plugin');

let pages = ["index","news", "photo", "rozklad"].map(element =>{
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, `./src/pages/${element}.html`), 
    filename: `${element}.html`
    });
});
module.exports = {
  entry: {
    index:'./src/index.js'
  },

  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
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
    ...pages,
  WriteFilePlugin(),
  new CopyPlugin({
    patterns: [     
      { from: 'src/pages/assets/images', to: 'assets/images' },         
    ],
  }),
    new CleanWebpackPlugin(),    

    ]
  
};
