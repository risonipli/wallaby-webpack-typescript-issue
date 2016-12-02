module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            phantomjs: {
                configFile: 'packages.karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('test', ['karma:phantomjs']);
};
