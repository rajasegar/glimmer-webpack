const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  return {
  mode: env.production ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    filename: 'people.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'system',
    publicPath: env.production ? 'https://glimmer-mf-people.surge.sh/' : '//localhost:8081/'
  },
  devtool:'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins:[ 
              ['@glimmer/babel-plugin-glimmer-env', { DEBUG: true}],
              '@glimmer/babel-plugin-strict-template-precompile',
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              '@babel/plugin-proposal-class-properties',
            ],
            presets: [['@babel/preset-env', { targets: { esmodules: true } } ]],
          },
        },
      },
    ],
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  }
};
}
