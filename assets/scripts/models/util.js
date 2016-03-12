var Posts = require('../collections/posts.js');

var Model = Backbone.Model.extend({

    initialize: function(options) {

        // CONFIGs
        this.set('bootstrap', window.bootstrap || {});
        this.set('config', this.get('bootstrap').config || {});
        this.set('taxonomies', this.get('config').taxonomies || {});


        // @TODO - weirdly caching posts here until can attaching to DOM
        this.set('posts', new Posts(this.get('bootstrap').posts || []));

        // STATE
        // @TODO - enable this when stateful nav is supported
        // this.set('history', Modernizr.history);
        // this.set('history', false);

    }

});

module.exports = new Model();
