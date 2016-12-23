var webpack = require("webpack");
var path = require("path");
module.exports = {
    watch: true,
    entry: "./demo/demo.js",
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "demo"),
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.DedupePlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    devServer: {
        contentBase: "./tests",
    }
};
