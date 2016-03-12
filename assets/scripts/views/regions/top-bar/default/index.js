module.exports = Marionette.LayoutView.extend({

    el: '#widemenu',

    template: false,

    triggers: {
        'click .search': 'toggle:search'
    },

    initialize: function(options) {

        console.log('regions/top-bar/default.initialize');

        this.mergeOptions(options, this.viewOptions || {});

        if (this._firstRender) { this.triggerMethod('attach'); }
    },

    onShow: function() {
        console.log('regions/top-bar/default.onShow');
    },

    onAttach: function() {
        console.log('regions/top-bar/default.onAttach');
        this.$el.foundation();
        this._initBillboard();
    },

    _initBillboard: function() {

        var rand = _.shuffle(_.range(0, 2))[0];

        if (rand) {

            // reduce frequency of ad rendering
            if (_.shuffle(_.range(0, 2))[0]) {

                // @TODO - write ad manager module
                this.$el.addClass('has-ad');
            }
        }
    },

    _centerActive: function() {

    }
});
