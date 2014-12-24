'use strict';

//
// Default 500 error pagelet that will be served if none is provided.
//
require('pagelet').extend({
  path: '/500',
  statusCode: 500,
  view: '500.html',
  env: process.env.NODE_ENV,
  pagelets: {
    diagnostics: require('diagnostics-pagelet')
  },

  /**
   * Return available data depending on environment settings.
   *
   * @param {Function} render Completion callback.
   * @api private
   */
  get: function get(render) {
    var self = this;

    render(null, {
      message: this.data.message,
      stack: self.env && self.env !== 'production' ? this.data.stack : ''
    });
  }
}).on(module);
