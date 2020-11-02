const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "markdown-input.js",
    library: "mardownInput",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { babelrc: true },
        },
      },
      {
        test: /\.css$/i,
        loader: "css-loader",
        options: {
          import: true,
        },
      },
      {
        test: /\.mdx?$/,
        use: ["babel-loader", "@mdx-js/loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  externals: [
    // Everything that starts with "library/"
    /^part:@sanity\/.+$/,
  ],
  node: {
    fs: "empty",
  },
};
