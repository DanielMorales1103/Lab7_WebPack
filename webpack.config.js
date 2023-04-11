const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    pagina1 : './pagina1.js',
    pagina2 : '/pagina2.js',
    pagina3 : '/pagina3.js',
    pagina4 : '/pagina4.js',
    },
  output: {
    path: path.resolve(__dirname, 'dist_webpack_babel'),
    filename: '[name].bundle.js',
  },
  plugins:[new MiniCssExtractPlugin({
    filename: "[name].css"
  }), 
  new HtmlWebpackPlugin({
    template: "./index.html",
    filename: "index.html",
    chunks :['pagina1']
  }),  
  new HtmlWebpackPlugin({
    template: "./libros-populares.html",
    filename: "libros-populares.html",
    chunks :['pagina2']
  }),
  new HtmlWebpackPlugin({
    template: "./nuevos-lanzamientos.html",
    filename: "nuevos-lanzamientos.html",
    chunks :['pagina3']
  }),
  new HtmlWebpackPlugin({
    template: "./Inicio-historia.html",
    filename: "Inicio-historia.html",
    chunks :['pagina4']
  })
    ],
  module: {
    rules: [
      {
        test: /.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ],
  },
};