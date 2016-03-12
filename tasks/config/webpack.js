var path = require('path');
var config = require(path.join(__dirname, '../../webpack.config.js'));

module.exports = function(grunt, callback) {

    var process = process || {};

    grunt.config.set('webpack', {

        dev: config

    });

    grunt.loadNpmTasks('grunt-webpack');
};
