const { resolve } = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin')

module.exports = {
    context: resolve(__dirname, '../src'),
    entry: {
        main: './main.ts',
        polyfill: [],
        vendor: [
            'angular',
            'bootstrap/dist/css/bootstrap.css'
        ]
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        port: 3000
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.ts$/, loader: `ts` },
            { test: /\.component.html$/, loader: `html` },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
            { test: /\.eot$/, loader: `file` },
            { test: /\.woff2?$/, loader: `file` },
            { test: /\.ttf$/, loader: `file` },
            { test: /\.svg$/, loader: `file` }
        ]
    },
    output: {
        chunkFilename: '[id].bundle.js',
        filename: '[name].bundle.js',
        path: './dist'
    },
    plugins: [
        new ExtractTextPlugin("main.css"),
        new CopyPlugin([
            { from: `./assets` },
            { from: `../node_modules/bootstrap/dist/css` }
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfill', 'vendor'].reverse()
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ]),
        new ngAnnotatePlugin({
            add: true
        })
    ],
    resolve: {
        alias: {},
        extensions: ['', '.ts', '.js']
    }
}
