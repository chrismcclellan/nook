
    global.$ = global.jQuery = require('jquery');

    global._ = require('underscore');

    global.Backbone = require('backbone');

    global.Wreqr = require('backbone.wreqr');
    Backbone.Wreqr = Wreqr;

    Backbone.Babysitter = require('backbone.babysitter');

    require('script!foundation-sites');

    global.vent = new Wreqr.EventAggregator();

    global.Marionette = require('backbone.marionette');

