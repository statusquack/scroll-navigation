import * as path from "path";
import * as webpack from "webpack";

const HTMLWebpackPlugin = require('html-webpack-plugin');

const config: webpack.Configuration = {
  mode: "production",
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new HTMLWebpackPlugin({template: './src/index.html'})
  ]
};

export default config;
