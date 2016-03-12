var View = require('../../layouts/base.js');

module.exports = View.extend({

    initialize: function(options) {

        console.log('pages/search.initialize');

        View.prototype.initialize.apply(this, arguments);
    }
});
