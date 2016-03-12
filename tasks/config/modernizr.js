/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function(grunt) {

    grunt.config.set('modernizr', {
        dev: {
            "dest": "assets/scripts/vendor/modernizr/modernizr.js",
            "parseFiles": true,
            "customTests": [],
            // "devFile": "/PATH/TO/modernizr-dev.js",
            // "outputFile": "/PATH/TO/modernizr-output.js",
            "tests": [
                // Tests
            ],
            "options": [
                "setClasses"
            ],
            "uglify": false
        }
    });

    grunt.loadNpmTasks('grunt-modernizr');
};
