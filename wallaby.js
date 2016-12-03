module.exports = function (wallaby) {
    var wallabyWebpack = require('wallaby-webpack');
    var webpackConfig = require('./webpack.conf.js');
    webpackConfig.module.loaders.shift();
    webpackConfig.resolve.root = wallaby.projectCacheDir;
    webpackConfig.resolve.extensions = ['', '.js'];
    webpackConfig.entryPatterns = [
        'packages/**/test.js',
        'packages/**/tests/unit/**/*.spec.js'];

    var webpackPostprocessor = wallabyWebpack(webpackConfig);

    return {
        files: [
            {pattern: 'packages/**/src/**/*.html', load: false},
            {pattern: 'packages/**/src/**/*.css', load: false},
            {pattern: 'packages/**/src/**/*.js', load: false},
            {pattern: 'packages/**/src/**/*.ts', load: false}
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

