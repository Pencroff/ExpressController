/**
 * Created by Pencroff on 25/05/2014.
 */
/*global require: true, module: true*/
var Moa = require('./extra/moa.dev-0.1.3.js'),
    express = require('express');
require('./extra/mixins/MixThrowErr');
module.exports = Moa.define('ExpressController', {
    $ctor: function (config) {
        'use strict';
        var me = this;
        me.notObjErr(config, 'Empty $ctor config for ExpressController.');
        me.notFnErr(config.app, 'Express App not injected.');
        me.notObjErr(config.dat, 'Data Access Tier reference not injected.');
        me.app = config.app;
        me.dat = config.dat;
        me.router = config.router || express.Router();
//        if (!me.root) {
//            me.root = '/';
//        }
    },
    $mixin: {
        throwErr: 'mixThrowErr'
    }
});
