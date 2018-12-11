module.exports = [
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader'
    ]
  },
  {
    test: /\.sass$/,
    use: [
      {
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }
    ]
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      'file-loader'
    ]
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
      'file-loader'
    ]
  },
  {
  test: /\.(js|jsx)$/,
  exclude: /(node_modules|bower_components)/,
  use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
          plugins: ["@babel/plugin-transform-runtime", "react-hot-loader/babel"]
        }
      },
      'eslint-loader'
    ]
  },
	{
		test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		loader: "url-loader?limit=10000&minetype=application/font-woff"
	}
];
