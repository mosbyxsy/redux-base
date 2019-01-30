var path = require('path');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        index: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        filename: "[name]-[chunkhash:5].js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx','.json']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin(),
        new cleanWebpackPlugin(['dist'])
    ]
};