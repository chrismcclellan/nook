var Handlebars = require('sails/node_modules/express-handlebars/node_modules/handlebars');
var helpers = {};


/**
 * If dark hex color
 * if_dark_hex `color`
 */
helpers.if_dark_hex = function(context, options) {

    var c = (context || "#000000").substring(1);// strip #
    var rgb = parseInt(c, 16);   // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff;  // extract red
    var g = (rgb >>  8) & 0xff;  // extract green
    var b = (rgb >>  0) & 0xff;  // extract blue
    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    if (luma < 99) {
        return options.fn(this);
    }

    return options.inverse(this);
}

helpers.localfy = function(context, options) {

    if (!context) { return '/'; }
    var path = context.split('.com')[1];
    return path;

}



for (var cond in helpers) {
    Handlebars.registerHelper(cond, helpers[cond]);
}
