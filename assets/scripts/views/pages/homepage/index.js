var View = require('../../layouts/base.js');

module.exports = View.extend({

    template: false,

    initialize: function(options) {

        console.log('pages/homepage.initialize');

        View.prototype.initialize.apply(this, arguments);
    }
});
