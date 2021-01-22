const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./app/index.js",
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: "svg-inline-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js)$/,
                use: "babel-loader",
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "app/index.html",
        }),
    ],
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    devServer: {
        open: true,
        port: 3000,
        historyApiFallback: true,
    },
};
