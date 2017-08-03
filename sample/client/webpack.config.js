const path = require("path");

module.exports = {
  entry: {
    'bundle-sample': path.join(__dirname, 'browser-sample.ts'),
    'bundle-login': path.join(__dirname, './browser-login.ts')
  },
  devtool: 'source-map',
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "../..", "dist", "sample"),
    libraryTarget: 'var',
    library: 'className'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFileName: 'tsconfig.sample.json'
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  node: {
    fs: 'empty',
    net: 'empty'
  }
};
