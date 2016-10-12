'use strict';

module.exports = function() {

    this.Given(/^User in session is Admin$/, (callback) => {
        callback(null, 'pending');
    });

    this.When(/^he add (\d+) units of Tomatoes, item price: (\d+)\.(\d+)\$$/, (arg1, arg2, arg3, callback) => {
        callback(null, 'pending');
    });

    this.Then(/^Stock is not empty$/, (callback) => {
        callback(null, 'pending');
    });

    this.Then(/^Stock contains (\d+) units of Tomatoes$/, (arg1, callback) => {
        callback(null, 'pending');
    });
    
};
