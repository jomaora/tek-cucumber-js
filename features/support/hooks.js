'use strict';

const stockLib = require('../../lib/stock');

module.exports = function() {
  this.Before(scenario => {
  	stockLib.reset(); 
  });
};