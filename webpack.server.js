const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  //서버는 node환경이므로
  target: "node",
  mode: "development",
  entry: path.resolve(__dirname, "server/index.tsx"),
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/server"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
