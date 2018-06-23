const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
  	"./src/client/index.js"
  ],
  devServer: {
    port: 3000,
    open: true,
    proxy: {
        "/api": "http://localhost:8080"
    }
  },
  devtool: "eval-source-map",
  output: {
  	path: __dirname,
  	filename: "bundle.js",
  	path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        // include: path.join(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["react"],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        loaders: ["url-loader"],
      },
    ]
  },
  performance: {
    hints: false,
  },
};
