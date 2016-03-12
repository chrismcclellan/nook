module.exports = Marionette.AppRouter.extend({

    controller: require('./controller.js'),

    appRoutes: {

        // Posts
        'posts/:slug': "posts", // catchall post
        'posts': "posts", // catchall post

        // Search
        'search*': 'search',

        // Homepage
        '': "homepage",

        // Error
        '*params': 'error404'
    },

    initialize: function(options) {

        this.options = this.options || {};

    }
});
