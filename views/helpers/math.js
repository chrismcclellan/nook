

var Handlebars = require('sails/node_modules/express-handlebars/node_modules/handlebars');
var helpers = {};

/**
 * Pad
 * pad @index width=3
 * 007
 */
helpers.pad = function(context, options) {

    var number = parseInt(context || 0, 10);
    var size = parseInt(options.hash.size || 0, 10);
    var pad = [];

    for (var i = 0; i < size; i++) {
        pad.push("0");
    }

    return (pad.join('') + number).slice( -(size));

};

/**
 * Add
 */
helpers.add = function(context, options) {
    var firstNum = context;
    var secondNum = options.hash.add;
    return firstNum + secondNum;
};

/**
 * Subtract
 */
helpers.subtract = function(context, options) {
    var firstNum = context;
    var secondNum = options.hash.subtract;
    return firstNum - secondNum;
};

/**
 * Multiply
 */
helpers.multiply = function(context, options) {
    var firstNum = context;
    var secondNum = options.hash.multiply;
    return firstNum * secondNum;
};


/**
 * Divide
 */
helpers.divide = function(context, options) {
    var firstNum = context;
    var secondNum = options.hash.divide;
    var num = firstNum / secondNum;
    return Math.round(num * 100) / 100;
};


for (var cond in helpers) {
    Handlebars.registerHelper(cond, helpers[cond]);
}
