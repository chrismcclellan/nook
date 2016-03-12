
module.exports = {

    handlers: require('./handlers.js'),

    // Centers any popup relative to the screen
    popupCenter: function(url, title, w, h) {

        // Fixes dual-screen position
        var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var ieFriendlyTitle = title.replace(/\s+/g, '');

        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        var newWindow = window.open(url, ieFriendlyTitle, 'scrollbars=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }
    },

    // @TODO - implement
    // Basically, the Pinterest share bookmarklet, so we don't have to include Pinterest's js
    // on every page, every time to get the full overlay - GW
    pinterestShare: function() {
        var e = document.createElement('script');
        e.setAttribute('type', 'text/javascript');
        e.setAttribute('charset', 'UTF-8');
        e.setAttribute('src', '//assets.pinterest.com/js/pinmarklet.js?r=' + Math.random() * 99999999);
        document.body.appendChild(e);
    }

};
