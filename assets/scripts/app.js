

module.exports = (function() {

    global.__base = __dirname;

    Backbone.Wreqr = Wreqr;

    global.util = require('./models/util.js');
    global.lib = require('./lib');

    // cache these jquerified objects
    global.$document = $(document);
    global.$window = $(window);
    global.$body = $('body');

    global.App = new Marionette.Application();
    global.BaseLayout = require.include('./views/layouts/base.js');

    App.on('start', function() {
        Backbone.history.start({pushState: true});
        vent.trigger('app:initialized', this);
    });

    vent.on('do:navigate', function(path, options) {
        options = options || {};
        App.router.navigate(path, _.extend({trigger: true, silent: false }, options));
    });

    App.addInitializer(function(options) {

        console.log('App.addInitializer');

        // create our Router
        var router = require('./controllers/router.js');
        this.router = new router();

    });

    App.start();

})();
