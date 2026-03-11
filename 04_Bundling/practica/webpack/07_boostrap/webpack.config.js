import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  entry: {
    app: "./src/students.js",
    vendorStyles: ['./node_modules/bootstrap/dist/css/bootstrap.css'],
    /* appStyles: './src/mystyles.css', */
  },
  output: {
    filename: "[name].[chunkhash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        /* exclude: /node_modules/, */
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "./src/index.html", //Name of template in ./src
      scriptLoading: "blocking", // Just use the blocking approach (no modern defer or module)
    }),
    new MiniCssExtractPlugin({
     filename: "[name].css",
     chunkFilename: "[id].css"
   }),
  ],
  devServer: {
    port: 8080,
  },
};
