/**
 * Created by Pencroff on 25/05/2014.
 */
/*global require: true, describe: true, it: true*/
var expect = require('chai').expect,
    Moa = require('../extra/moa.dev-0.1.3.js'),
    ctor = require('../ExpressController.js'),
    ctrlCtor = Moa.define('ExpressController');

describe('Test ExpressController', function () {
    'use strict';
    it('Check Moa container', function (done) {
        expect(ctor).to.equal(ctrlCtor);
        done();
    });
});