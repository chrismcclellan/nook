
module.exports = {

    delete: function(cname) {
        document.cookie = cname + '=""; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    },

    set: function(cname, cvalue, exdays, path) {
        var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
    },

    get: function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return "";
    }
};

