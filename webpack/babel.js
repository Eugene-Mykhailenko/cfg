module.exports = paths => {
  return {
    module: {
      rules: [
        {
          test: /\.m?js$/,
          include: paths,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread'],
            },
          },
        },
      ],
    },
  };
};
