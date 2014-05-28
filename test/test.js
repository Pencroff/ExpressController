/**
 * Created by Pencroff on 25/05/2014.
 */
/*global require: true, describe: true, it: true*/
var expect = require('chai').expect,
    Moa = require('../extra/moa.dev-0.1.3.js'),
    express = require('express'),
    mongoose = require('mongoose');
require('../ExpressController.js');
describe('Test ExpressController', function () {
    'use strict';
    it('Controller initialization exceptions', function (done) {
        var CtrlCtor = Moa.define('ExpressController'),
            item;
        expect(
            function () {
                item = new CtrlCtor();
            }
        ).to.throw('Empty $ctor config for ExpressController.');
        expect(
            function () {
                item = new CtrlCtor({});
            }
        ).to.throw('Express App not injected.');
        expect(
            function () {
                item = new CtrlCtor({app: function(){}});
            }
        ).to.throw('Data Access Tier reference not injected.');
        done();
    });
    it('Controller initialization', function (done) {
        var CtrlCtor = Moa.define('ExpressController'),
            expressApp = express(),
            routerFake = {},
            item;
        console.log(expressApp);

        item = new CtrlCtor({
            app: expressApp,
            dat: mongoose
        });

        expect(item.app).to.equal(expressApp);
        expect(item.dat).to.equal(mongoose);
        expect(item.router).to.not.be.undefined;

        item = new CtrlCtor({
            app: expressApp,
            dat: mongoose,
            router: routerFake
        });
        expect(item.app).to.equal(expressApp);
        expect(item.dat).to.equal(mongoose);
        expect(item.router).to.equal(routerFake);
        done();
    });
});