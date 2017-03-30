var wallabyWebpack = require('wallaby-webpack');
var webpackConfig = require('./webpack.conf.js');
webpackConfig.entryPatterns = ['packages.test.js'];

var webpackPostprocessor = wallabyWebpack({
    entryPatterns: [
        'src/**/*.spec.js'
    ]
});

module.exports = function () {
    return {
        files: [
            {pattern: 'src/**/*.js', load: false},
            {pattern: 'src/**/*.ts', load: false},

            {pattern: 'src/**/*.spec.ts', ignore: true},
        ],

        tests: [
            {pattern: 'src/**/*.spec.ts', load: false},
        ],

        testFramework: 'jasmine',
        postprocessor: webpackPostprocessor,
        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    };
};

