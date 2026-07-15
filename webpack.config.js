const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/main.jsx',

    output: {
      path: __dirname,
      filename: 'app.bundle.js',
      clean: false,
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },

    plugins: [
      // The generated _ds_bundle.js and the portfolio .jsx files were written
      // for the no-build world where React is a global. ProvidePlugin injects
      // `import React from 'react'` into any module that references React,
      // so they keep working without editing the generated files.
      new webpack.ProvidePlugin({ React: 'react' }),
    ],

    devtool: isProd ? 'source-map' : 'eval-source-map',

    devServer: {
      static: { directory: __dirname },
      port: 5173,
      hot: true,
    },
  };
};
