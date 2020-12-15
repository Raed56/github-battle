const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./app/index.js",
    module: {
        rules: [
            { test: /\.svg$/, use: "svg-inline-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.(js)$/, use: "babel-loader" },
        ],
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
    },

    plugins: [new HtmlWebpackPlugin()],

    mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
