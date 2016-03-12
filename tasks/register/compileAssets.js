module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
        'webpack:dev',
		'compass:dev'
    ]);
};
