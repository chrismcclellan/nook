var Post = require('../models/post.js');

module.exports = Backbone.Collection.extend({

    model: Post,

    initialize: function() {
        console.log('collections/post.initialize');
    }

});
