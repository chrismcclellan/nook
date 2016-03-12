

var Handlebars = require('sails/node_modules/express-handlebars/node_modules/handlebars');
var helpers = {};

helpers.partial = helpers.partials = function(path, options) {

    // Get the partial with the given name. This is a string.
    var partial = Handlebars.partials[path];

    // Return empty string if the partial is not defined
    if (!partial) return "";

    console.log('partial', partial);

    // Compile and call the partial with this as context
    return new Handlebars.SafeString(Handlebars.compile(partial)(this));
};


for (var cond in helpers) {
    Handlebars.registerHelper(cond, helpers[cond]);
}

