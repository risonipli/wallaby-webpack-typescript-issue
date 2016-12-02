var webpackConf = require('./webpack.conf.js');

module.exports = function karmaConfig(config) {
    var conf = {
        frameworks: [
            'jasmine'
        ],

        reporters: [
            'progress'
        ],

        files: [
            'packages.test.ts'
        ],

        preprocessors: {
            'packages.test.ts': ['webpack']
        },

        browsers: [
            'Chrome'
        ],

        singleRun: true,
        webpack: webpackConf,

        webpackMiddleware: {
            noInfo: 'errors-only'
        }
    };

    config.set(conf);
};
