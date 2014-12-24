describe('500 Pagelet', function () {
  'use strict';

  var Pagelet = require('pagelet')
    , fivehundred = require('../')
    , assume = require('assume')
    , pagelet, P;

  beforeEach(function () {
    P = fivehundred.extend({
      view: 'fixtures/view.html'
    });

    pagelet = new P(new Pagelet);
  });

  afterEach(function each() {
    pagelet = null;
  });

  it('has statusCode 500', function () {
    assume(pagelet.statusCode).to.be.an('number');
    assume(pagelet.statusCode).to.equal(500);
  });
});
