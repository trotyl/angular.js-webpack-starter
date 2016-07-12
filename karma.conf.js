const path = require('path')

module.exports = function (config) {
    config.set({

        basePath: '.',

        files: [
            'test/spec.js'
        ],

        preprocessors: {
            'config/webpack.spec.js': ['webpack', 'sourcemap']
        },

        webpack: {
            devtool: 'source-map',
            context: path.resolve(__dirname, './src'),
            module: {
                loaders: [
                    {test: /\.ts$/, loader: `ts`},
                    {test: /\.component.html$/, loader: `file!extract!html`},
                    {test: /\.component.css$/, loader: `file!extract!css`}
                ]
            },
            output: {
                chunkFilename: '[id].bundle.js',
                filename: '[name].bundle.js',
                path: './dist'
            },
            resolve: {
                extensions: ['', '.ts', '.js']
            }
        },
        
        webpackMiddleware: {
            noInfo: false
        },

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Firefox'],

        plugins: [
            require('karma-chrome-launcher'),
            require('karma-firefox-launcher'),
            require('karma-jasmine'),
            require('karma-sourcemap-loader'),
            require('karma-webpack')
        ]

    })
}
