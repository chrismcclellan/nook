/**
 * Modernizr build.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-modernizr
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
