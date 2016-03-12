/**
 * Compiles SASS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/main.scss` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see: https://github.com/gruntjs/grunt-contrib-compass
 */
module.exports = function(grunt) {

	grunt.config.set('compass', {

        'dev': {
            'options': {
                'importPath': [
                  'node_modules/foundation-sites/scss',
                  'node_modules/motion-ui/src'
                ],
                'sassDir': 'assets/scss',
                'cssDir': 'assets/css',
                'imagesDir': 'assets/images',
                'fontsDir': 'assets/fonts',
                'outputStyle': 'expanded',
                'specify': 'assets/scss/app.scss'
            }
        },

        'prod': {
            'options': {
                'importPath': [
                  'node_modules/foundation-sites/scss',
                  'node_modules/motion-ui/src'
                ],
                'sassDir': 'assets/scss',
                'cssDir': 'assets/css',
                'imagesDir': 'assets/images',
                'fontsDir': 'assets/fonts',
                'force': true,
                'outputStyle': 'compressed',
                'sourcemap': true
            }
        },

        'devHelpers': {
            'options': {
                'importPath': [
                  'node_modules/foundation-sites/scss',
                  'node_modules/motion-ui/src'
                ],
                'sassDir': 'assets/scss',
                'cssDir': 'assets/css',
                'imagesDir': 'assets/images',
                'fontsDir': 'assets/fonts',
                'outputStyle': 'expanded',
                'specify': 'assets/scss/dev/dev.scss'
            }
        }


	});

	grunt.loadNpmTasks('grunt-contrib-compass');
};
