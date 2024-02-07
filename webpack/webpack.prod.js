const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const LOCAL_IDENT_NAME = "[name]__[local]--[hash:base64]";

const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "production",
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: "" },
          },
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
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
      new HtmlMinimizerPlugin(),
    ],
    minimize: true,
  },
});
