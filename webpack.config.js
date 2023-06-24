const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Knights travails",
      favicon: "./src/knight.png",
      template: "./src/index.html",
    }),
  ],
};
