/* eslint-disable no-undef */
const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.ts"),
  experiments: { asyncWebAssembly: true },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "./js/bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },
};
