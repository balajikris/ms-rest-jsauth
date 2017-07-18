module.exports = {
  entry: './sample.ts',
  output: {
    filename: 'bundle.js',
    path: __dirname + "/dist",
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
