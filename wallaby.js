var wallabyWebpack = require('wallaby-webpack');
var webpackConfig = require('./webpack.conf.js');
webpackConfig.entryPatterns = ['packages.test.js'];

var webpackPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function () {
    return {
        files: [
            {pattern: 'packages/**/src/**/*.html', load: false},
            {pattern: 'packages/**/src/**/*.css', load: false},
            {pattern: 'packages/**/src/**/*.js', load: false},
            {pattern: 'packages/**/src/**/*.ts', load: false},
            {pattern: 'packages.test.ts', load: false}
        ],

        tests: [
            {pattern: 'packages/**/tests/unit/**/*.spec.ts', load: false},
            {pattern: 'packages/**/tests/unit/**/*.spec.js', load: false}
        ],

        testFramework: 'jasmine',
        postprocessor: webpackPostprocessor,
        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    };
};

