var wallabyWebpack = require('wallaby-webpack');

var webpackPostprocessor = wallabyWebpack({
    entryPatterns: [
        'src/**/*.spec.js'
    ]
});

module.exports = function () {
    return {
        debug: true,
        files: [
            { pattern: 'src/**/*.js', load: false },
            { pattern: 'src/**/*.ts', load: false },
            // { pattern: 'node_modules/utils/package.json', load: false },
            // { pattern: 'node_modules/utils_user/package.json', load: false },
            // { pattern: 'node_modules/utils/**/*.ts', load: false },
            // { pattern: 'node_modules/utils_user/**/*.ts', load: false },

            { pattern: 'src/**/*.spec.ts', ignore: true }
        ],

        tests: [
            { pattern: 'src/**/*.spec.ts', load: false },
        ],

        testFramework: 'jasmine',
        preprocessors: {
            '**/*.json': function (file) {
                return file.content.replace('index.ts', 'index.js');
            }
        },
        postprocessor: webpackPostprocessor,
        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    };
};

