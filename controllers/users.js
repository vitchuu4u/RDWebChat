'use strict';

module.exports = function (_) {

    return {
        SetRouting: function (router) {
            router.get("/", this.indexPage);
            router.get("/signup", this.getSignUp);
        },

        indexPage: function (req, res) {
            return res.render('index', { test: "This is the test page" });
        },

        getSignUp: function(req,res) {
            return res.render('signup');
        }
    }
};