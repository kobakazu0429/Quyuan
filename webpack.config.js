"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = /** @type {import("webpack").Configuration} */ ({
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV === "production" ? "source-map" : "inline-source-map",

  entry: "./src/index.js",

  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],

  output: {
    clean: true,
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]-[contenthash].js"
  },

  devServer: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: "all",
    hot: true,
    open: true,
    historyApiFallback: true,
    static: {
      directory: "./public",
      watch: true,
    },
    client: {
      overlay: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      }
    ]
  }
});
