const path = require("path");

module.exports = {
  mode: "development",
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
    path: path.resolve(__dirname, "public"),
    filename: "./js/bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },
};
