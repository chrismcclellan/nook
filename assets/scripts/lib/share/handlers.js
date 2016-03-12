var config = util.get('config').config || {};
var share = config.share || {};

module.exports = {


    twitter: function(model) {

        // console.log('twitter', model);

        var share = util.get('config').share.twitter;
        var options = this.buildOptions(model);
        var data = {};

        // console.log('built options', options);

        var socialIdentities = options.social_identities;
        var cleanTitle = (options.title || "").replace(/"/g, "&quot;");

        data.text = cleanTitle + ' By ' + options.author_name;
        data.url = options.url;

        return this.constructShareData(share, _.extend(options, data));
    },

    facebook: function(model) {

        var share = util.get('config').share.facebook;
        var options = this.buildOptions(model);
        var data = {};

        data.u = options.url;
        data.app_id = 1723227811226946;
        data.display = 'popup';

        // console.log(data);

        return this.constructShareData(share, _.extend(options, data));
    },

    linkedin: function(model) {

        var share = util.get('config').share.linkedin;
        var options = this.buildOptions(model);
        var data = {};

        data.url = options.url;
        data.title = options.title;
        data.text = options.text;

        return this.constructShareData(share, _.extend(options, data));
    },

    pinterest: function(model) {

        var share = util.get('config').share.pinterest;
        var options = this.buildOptions(model);
        var data = {};

        data.url = options.url;
        data.description = options.text;
        data.media = options.picture;

        return this.constructShareData(share, _.extend(options, data));
    },

    googleplus: function(model) {

        var share = util.get('config').share.googleplus;
        var options = this.buildOptions(model);
        var data = {};

        data.url = options.url;

        return this.constructShareData(defaults._defaults, data);
    },


    buildOptions: function(attrs) {

        attrs = attrs || {};

        var options = {};

        options.title = attrs.postTitle || '';
        options.url = attrs.postURL || '';
        options.text = attrs.dek || 'TKTKTK';
        options.picture = attrs.thumbnailImage || '';

        if (attrs.authors && attrs.authors[0]) {
            options.author_name = attrs.authors[0].display_name || '';

            if (attrs.authors[0].social) {
              options.social_identities = attrs.authors[0].social;
            }
        }

        return options;

    },

    // Builds complete url with encoded values
    constructURL: function(data) {

        var url = [];

        for (var prop in data) {
            if (data[prop]) {
                url.push(prop + '=' + data[prop]);
            }
        }

        return url.join('&');
    },

    // Builds params with url encoded values
    cleanData: function(data) {
        var newdata = {};
        for (var prop in data) {
            newdata[prop] = (data[prop]) ? encodeURIComponent(data[prop]) : data[prop];
        }
        return newdata;
    },

    // Construct final share entity object
    constructShareData: function(defaults, data) {

        var obj = _.extend({}, defaults, {data: data});

        obj.data = this.cleanData(data);
        obj.data.url = defaults.base_url + this.constructURL(data);

        return obj;
    }
};
