/**
 * Created by Pencroff on 25/05/2014.
 */
/*global require: true, module: true*/
var Moa = require('./extra/moa.dev-0.1.3.js'),
    express = require('express');
module.exports = Moa.define('ExpressController', {
    $ctor: function (app, router) {
        'use strict';
        var me = this;
        me.app = app;
        me.router = router || express.Router();
    }
});
