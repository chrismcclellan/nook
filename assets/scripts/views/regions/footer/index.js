module.exports = Marionette.LayoutView.extend({

    el: '#footer',

    template: false,

    initialize: function(options) {

        console.log('regions/footer.initialize');

        this.mergeOptions(options, this.viewOptions || {});
    },

    onShow: function() {
        console.log('regions/footer.onShow');
    },

    onAttach: function() {
        console.log('regions/footer.onAttach');
        this.$el.foundation();
    }
});
