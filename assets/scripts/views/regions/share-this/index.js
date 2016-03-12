
var lib = global.lib || {};
var share = lib.share || {};

module.exports = Marionette.LayoutView.extend({

    el: '.share-this',

    events: {
        'click li:not(.share-email)': 'onClick',
        'click .share-email': 'onEmailClick'
    },

    template: false,

    initialize: function(options) {

        console.log('regions/share-this.initialize');

        this.mergeOptions(options, this.viewOptions || {});
    },

    onEmailClick: function(event) {

        event.preventDefault();

        var mailto = 'mailto:?';
        var body = '&body=';

        body += encodeURIComponent(this.model.get('postTitle')+"\n\r");
        body += this.model.get('dek') ? encodeURIComponent(this.model.get('dek')+"\n\r") : '';
        body += encodeURIComponent(this.model.get('postURL')+"\n\r");

        mailto += 'subject=Thought you might like to read ' + this.model.get('postTitle');
        mailto += (body) ? body : '';

        window.location = mailto;
    },

    onClick: function(event) {

        event.preventDefault();

        var config = util.get('config') || {};
        var site_settings = config.site_settings || {};

        var $this = $(event.currentTarget);
        var entity = $this.attr('data-entity');
        var title = 'Share ' + site_settings.site_name;

        if (!share.handlers[entity]) return console.error('Missing share handler for ', entity);

        var obj = share.handlers[entity](this.model.attributes);
        share.popupCenter(obj.data.url, obj.data.title || title, obj.popup_width, obj.popup_height);
    },

    onShow: function() {
        console.log('regions/share-this.onShow');
    },

    onAttach: function() {
        console.log('regions/share-this.onAttach');
        this.$el.foundation();
    }
});
