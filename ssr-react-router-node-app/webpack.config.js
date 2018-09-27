const path = require('path');
const webpack = require('webpack');
const HtmlWebPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: ['./app/index.js'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'app'),
                use: [{
                    loader:'babel-loader',
                  }],
            },
        ]
    }
};
