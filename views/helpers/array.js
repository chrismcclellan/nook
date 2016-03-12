

var Handlebars = require('sails/node_modules/express-handlebars/node_modules/handlebars');
var helpers = {};


/**
 * Join array
 * join `array` delimeter=" "
 */
helpers.join = function(context, options) {

    var arr = Array.isArray(context) ? context : [];
    var delimeter = options.hash.delimeter;

    return arr.join(delimeter);
}


/**
 * In array
 * in_array `array` needle="something"
 */
helpers.if_in_array = function(context, options) {

    // console.log(context, options);

    var haystack = Array.isArray(context) ? context : [];
    var find = options.hash.find;

    if (haystack.indexOf(find) > -1) {
        return options.fn(this);
    }

    return options.inverse(this);
}

for (var cond in helpers) {
    Handlebars.registerHelper(cond, helpers[cond]);
}
