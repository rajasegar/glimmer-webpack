module.exports = {
  mode: process.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    library: 'navbar',
    filename: 'navbar.js'
  },
  devtool:'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins:[ 
              '@glimmer/babel-plugin-strict-template-precompile',
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              '@babel/plugin-proposal-class-properties',
            ],
            presets: ['@babel/preset-env'],
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
