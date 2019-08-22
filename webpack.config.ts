import * as path from "path";
import * as webpack from "webpack";

const HTMLWebpackPlugin = require("html-webpack-plugin");

const config: webpack.Configuration = {
  mode: "production",
  entry: {
    index: "./src/index.ts",
    "scrollNavigation.min": "./src/scrollNavigation.ts",
    "scrollNavigation.fullscreen.min": "./src/scrollNavigation.fullscreen.ts"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      version: require("./package.json").version
    })
  ]
};

export default config;
