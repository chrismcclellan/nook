/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

    grunt.config.set('watch', {

        scripts: {
            options: { preserve_path: true },
            files: ['assets/scripts/**/*'],
            tasks: ['webpack:dev', 'sync:dev']
        },

        scss: {
            options: { preserve_path: true },
            files: ['assets/scss/**/*'],
            tasks: ['compass:dev', 'sync:dev']
        },


        images: {
            options: { preserve_path: true },
            files: ['assets/images/**/*'],
            tasks: ['sync:dev']
        },

        grunt: {
            options: { reload: true },
            files: [
                'Gruntfile.js',
                'tasks/**/*',
                '!tasks/nook/lib/_populate/**/*'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
