const path = require("path");
const LOCAL_IDENT_NAME = "[name]__[local]--[hash:base64:5]";

const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: true,
    historyApiFallback: true,
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: LOCAL_IDENT_NAME,
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
});
