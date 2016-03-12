var lib = function() {

    return {
        share: require('./share'),
        cookies: require('./cookies')
    };

};

module.exports = new lib();
