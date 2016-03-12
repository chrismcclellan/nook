module.exports = Marionette.LayoutView.extend({

    el: 'body',

    template: false,

    regions: {
        topbar: {selector: '#widemenu', view: require('../regions/top-bar/default') }
    },

    childEvents: {
        'toggle:search': 'onToggleSearch'
    },

    initialize: function(options) {

        this.on('attach', this._onAttach, this);

        this.mergeOptions(options, this.viewOptions || {});

        if (this._firstRender) { this.triggerMethod('attach'); }
    },

    onShow: function() {
        this.__initRegions('show');
    },

    _onAttach: function() {
        console.log('layouts/base._onAttach');
        this.__initRegions('attachView');
        this._initFoundation();
    },

    onToggleSearch: function(view) {
        console.log('layouts/base.onToggleSearch');
        if (!this.search || !this.search.currentView) { return; }
        this.search.currentView.trigger('toggle');
    },

    _initFoundation: function() {
        this.$el.foundation();
    },

    __initRegions: function(method) {

        var self = this;

        _.each(this.regions, function(region, key) {

            var View = self[key].options.view;
            var options = _.extend({}, self.options, {method: method});

            if (!View) return console.warn('View for ' + key + ' is missing.');

            self[key][method](new View(options), options);

        });
    },

    onChildClickToggle: function(view, event) {

    },

    onChildClickClose: function(view, event) {

    }
});
