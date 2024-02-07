const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const LOCAL_IDENT_NAME = "[name]__[local]--[hash:base64]";

const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { modules: { localIdentName: LOCAL_IDENT_NAME } },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});
