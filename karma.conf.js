const path = require('path')

module.exports = function (config) {
    config.set({

        basePath: '.',

        files: [
            'test/spec.js'
        ],

        preprocessors: {
            'test/spec.js': ['webpack', 'sourcemap']
        },

        webpack: require('./config/webpack.spec'),
        
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
