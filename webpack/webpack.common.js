const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ENTRY_PATH = path.resolve(__dirname, "../src/index");
const DIST_PATH = path.resolve(__dirname, "../dist");

module.exports = {
  entry: {
    main: ENTRY_PATH,
  },
  output: {
    filename: "[name].bundle.js",
    path: DIST_PATH,
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/logo.svg",
      inject: true,
    }),
  ],
};
