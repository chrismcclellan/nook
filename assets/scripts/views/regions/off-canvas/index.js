
module.exports = Marionette.ItemView.extend({

    template: false,

    initialize: function(options) {

        console.log('regions/off-canvas.initialize');

        $document.on('opened.zf.offcanvas', function() {
            $('body').addClass('overflow-hidden');
        });

        $document.on('closed.zf.offcanvas', function() {
            $('body').removeClass('overflow-hidden');
        });

        this.$el.foundation();
    },

    _open: function() {
        vent.trigger('off-canvans:open:right');
    },

    _close: function() {
        vent.trigger('off-canvans:close:right');
    }
});
