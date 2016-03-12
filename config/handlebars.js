/**
 * Add Helpers and Partials to Handlebarsobj
 */
var Handlebars = require('sails/node_modules/express-handlebars/node_modules/handlebars');
var path = require('path');
var fs = require('fs');

// HELPERS
// ===============================================================

var helpers_dir = path.join(__dirname, '../views/helpers/');

fs.readdir(helpers_dir, function(error, files) {
    if (error) return console.error(error);
    files.forEach(function(file) {
        require(helpers_dir + file);
    });
});

// PARTIALS
// traverse views directory and find all partials specific to pages
// all partials within /views/pages will be available - {{> pages/**/*}}
// ================================================================
//  This registers every handlebar file in the partials folder
var dev_dir = path.join(__dirname, '../views');
var pages_dir = path.join(__dirname, '../views');
var in_partials = false;
var findPartials = function(current_path) {

    in_partials = current_path.indexOf('partials') > -1 || current_path.indexOf('/dev') > -1;

    var files = fs.readdirSync(current_path);

    for (var i in files) {

        var currentFile = current_path + '/' + files[i];
        var stats = fs.statSync(currentFile);

        if (stats.isFile() && in_partials && currentFile.indexOf('.DS') === -1) {

            var namespace = currentFile.split('views/')[1].replace('.handlebars', '');

            fs.readFile(currentFile, 'utf8', function(err, contents) {
                // console.log(namespace);
                Handlebars.registerPartial(namespace, contents);
            });

        } else if (stats.isDirectory()) {

            findPartials(currentFile);
        }
    }
};

findPartials(pages_dir);
