
var webpack = require("webpack");

module.exports = {

     // webpack options
    entry: {
        app: ['./assets/scripts/app.js'],
        vendor: ['./assets/scripts/vendor/index.js']
    },

    output: {
        path: "./assets/js",
        publicPath: "/js/",
        filename: "[name].js"
    },

    resolve: {
        modulesDirectories: ["node_modules"]
    },

    loaders: [
        { test: /jquery/, loader: 'exports?jquery,$!imports?window' },
        { test: /underscore/, loader: 'exports?_!imports?window' },
        { test: /backbone/, loader: 'exports?Backbone!imports?_,jquery' },
        { test: /backbone\.wreqr/, loader: 'exports?Wreqr!imports?backbone' },
        { test: /backbone\.babysitter/, loader: 'exports?Babysitter!imports?Backbone' },
        { test: /backbone\.marionette/, loader: 'exports?Marionette!imports?Backbone' },
        { test: /foundation-sites/, loader: 'exports?foundation!imports?jquery' }
    ],

    plugins: [

        // new webpack.optimize.UglifyJsPlugin(),

        // new webpack.optimize.DedupePlugin()
        // new webpack.optimize.CommonsChunkPlugin({children: true, async: true})
    ],

    // Configure the console output
    stats: {
        colors: true,
        modules: true,
        reasons: false
    }
};
