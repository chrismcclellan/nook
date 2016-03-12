
var View = require('../../layouts/base.js');

module.exports = View.extend({

    initialize: function(options) {

        this.mergeOptions(options, this.viewOptions || {});

        options = options.options;

        // @TODO - better model based view propagation...
        var path = ['', options[0], options[1]].join('/');
        this.model = util.get('posts').findWhere({path: path});

        View.prototype.initialize.apply(this, arguments);

        var onScroll = _.bind(this._onScroll, this);
        $window.bind('scroll.'+this.cid, _.throttle(onScroll, 300));
    },

    onAttach: function() {

        console.log('pages/post.onAttach');
        // View.prototype.onAttach.apply(this, arguments);

        var ShareThis = require('../../regions/share-this');
        new ShareThis({model: this.model});
    },

    _onScroll: function() {

        var $elem = $('#post-'+this.model.get('id'));
        var offset = $elem.offset().top;
        var height = $elem.outerHeight();
        var scroll_distance = $document.scrollTop();
        var scroll_direction = (scroll_distance >= this.last_scroll_distance) ? 'down' : 'up';
        this.last_scroll_distance = scroll_distance;

        var threshold = offset + (height / 2);

        // @TODO - better way to abstract this so pub'ing an event and calling a function somewhere else isn't analogous
        if (scroll_direction === 'down' && scroll_distance > threshold) {
            vent.trigger('like-us-overlay:open');
        }

    },

    onDestroy: function() {
        $window.unbind('scroll.'+this.cid);
    }
});
