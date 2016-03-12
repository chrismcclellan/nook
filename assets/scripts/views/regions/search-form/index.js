
module.exports = Marionette.LayoutView.extend({

    el: '#search-form',

    template: false,

    is_open_class: 'search-form-open',

    ui: {
        q: $('#q')
    },

    events: {
        // 'blur #q': '_close',
        'submit form': 'onSubmit',
        'keyup #q': 'haveValue',
        'focus #q': 'haveValue'
    },

    initialize: function(options) {

        console.log('regions/search-form.initialize');

        this.mergeOptions(options, this.viewOptions || {});

        this.on('toggle', this.onToggle, this);

        this.start_value = this.ui.q.val();
    },

    _onScroll: function() {
        if ($document.scrollTop() > this.$el.outerHeight()) {
            // console.log('close', $document.scrollTop(), this.$el.outerHeight());
            this._close();
        }
    },

    haveValue: function() {
        if ($.trim(this.ui.q.val())) return this.$el.addClass('has-value');
        this.$el.removeClass('has-value');
    },

    onToggle: function() {
        if (this.is_open) return this._close();
        this._open();
    },

    onSubmit: function(event) {

        var self = this;
        var val = this.ui.q.val();
        if (val && val !== this.start_value) return true;

        event.preventDefault();

        this.$el.addClass('error');
        this.ui.q.val('').focus();

        window.setTimeout(function() { self.$el.removeClass('error'); }, 300);
    },

    _bindScroll: function() {
        var self = this;
        var boundFunc = _.bind(self._onScroll, self);
        var scrollFunc = _.throttle( boundFunc, 300, {leading: false});
        $window.bind('scroll.search-form', scrollFunc);
    },

    _unbindScroll: function() {
        $window.unbind('scroll.search-form');
    },

    _open: function() {
        $body.addClass(this.is_open_class);
        this.is_open = true;
        this._bindScroll();
        this.ui.q.focus();
    },

    _close: function() {
        $body.removeClass(this.is_open_class);
        this.is_open = false;
        return true;
    },

    onShow: function() {
        console.log('regions/search-form.onShow');
    },

    onAttach: function() {
        console.log('regions/search-form.onAttach');
        // this.$el.foundation();
    }
});
