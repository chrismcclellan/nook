var util = {};
var _ = require('lodash');

util.getClasses = function() {

    var sails = global.sails || {};
    var config = sails.config || {};

    var classes = [];
    var keys = Object.keys(arguments);

    for (var i = 0; i < keys.length; i++) {

        var key = keys[i];
        var selector = arguments[key];

        if (!selector) continue;

        if (!_.isString(selector) && _.isObject(selector)) {
            _.each(selector, function(val, key) {
                classes.push(key + '-' + val);
            });
        } else {
            classes.push(selector);
        }
    }

    if (sails.config.environment === "development") {
        classes.push('dev');
    }

    return _.flatten(classes);
};

util.getConfig = function(configs) {

    var public_configs = ['navigation', 'site_settings', 'social_entities', 'share'];
    var safe_configs = {};

    for (var i = 0; i < public_configs.length; i++) {
        safe_configs[public_configs[i]] = configs[public_configs[i]];
    }

    safe_configs.environment = sails.config.environment;

    return safe_configs;
};

util.getPagination = function(params) {

    params = params || {};

    var obj = {};

    var paged = params.paged || 0;
        paged = paged > 1 ? paged : 0;

    obj.limit = params.limit || 10;
    obj.skip = paged * obj.limit;

    if (params.sort) {
        obj.sort = params.sort;
    }

    return obj;
};

module.exports = {};
module.exports.nook = {};
module.exports.nook.util = util;
