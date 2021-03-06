const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/client/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    publicPath: "/dist/",
    port: 8080,
    hot: true,
    proxy: {
      "/api": "http://localhost:2000"
    }
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          // style-loader
          { loader: "style-loader" },
          // css-loader
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  }
};
