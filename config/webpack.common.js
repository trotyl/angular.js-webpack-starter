const { resolve } = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    context: resolve(__dirname, '../src'),
    entry: {
        main: './main.ts',
        polyfill: [],
        vendor: ['angular']
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
            { test: /\.component.html$/, loader: `file!extract!html` },
            { test: /\.component.css$/, loader: `file!extract!css` }
        ]
    },
    output: {
        chunkFilename: '[id].bundle.js',
        filename: '[name].bundle.js',
        path: './dist'
    },
    plugins: [
        new CopyPlugin([
            { from: `./assets`, to: `./assets` },
            { from: `../node_modules/bootstrap/dist/css`, to: `./assets` }
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfill', 'vendor'].reverse()
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ])
    ],
    resolve: {
        alias: {},
        extensions: ['', '.ts', '.js']
    }
}
