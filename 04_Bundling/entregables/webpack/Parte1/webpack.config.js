import path from "path";
import url from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
    context: path.resolve(__dirname, "./src"),
    entry: {
        app: ["./entregableParte1.js"],
    },
    output: {
    filename: "[name].[chunkhash].js",
    clean: true,
  },
  module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg)$/,
          type: "asset/resource",
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
      ],
    },
    plugins: [      
      new HtmlWebpackPlugin({
        filename: "index.html", //Name of file in ./dist/
        template: "index.html", //Name of template in ./src
        scriptLoading: "blocking",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
    devServer: {
      port: 8080,
      open: true,
      hot: true,
      static: {
        directory: path.join(__dirname, "src"),
      },
    },
};