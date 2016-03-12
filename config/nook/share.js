
module.exports.nook = {};

module.exports.nook.share = {

    'googleplus': {
        'nice_name': 'Google +',
        'popup_width': 480,
        'popup_height': 665,
        'base_url': 'https://plus.google.com/share?',
        '_defaults': {
            'url': false
        }
    },

    'twitter': {
        'nice_name': 'Twitter',
        'popup_width': 555,
        'popup_height': 215,
        'base_url': 'http://twitter.com/share?',
        '_defaults': {
            'url': false,
            'via': false,
            'text': false,
            'hashtags': false,
            'related': false
        }
    },

    'facebook': {
        'nice_name': 'Facebook',
        'popup_width': 555,
        'popup_height': 370,
        'base_url': 'http://www.facebook.com/sharer.php?',
        '_defaults': {
            'u': false,
            'app_id': false,
            'display': false
        }
    },

    'linkedin': {
        'nice_name': 'Linkedin',
        'popup_width': 600,
        'popup_height': 465,
        'base_url': 'http://www.linkedin.com/shareArticle?mini=true&',
        '_defaults': {
            'url': false,
            'title': false,
            'text': false,
            'source': false
        }
    },

    'pinterest': {
        'nice_name': 'Pinterest',
        'popup_width': 750,
        'popup_height': 316,
        'base_url': 'http://pinterest.com/pin/create/button/?',
        '_defaults': {
            'url': false,
            'text': false,
            'image': false
        }
    }
};

