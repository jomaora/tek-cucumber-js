'use strict';

const stockLib = require('../../lib/stock');
const {expect} = require('chai');

module.exports = function() {

    this.Given(/^User in session is (.*)$/, (user) => {
        this.user = user;
    });

    this.When(/^he add (\d+) units of (.*), item price: (.*)$/, (units, name, price) => {
        const product = {units, name, price};
        stockLib.addProduct(this.user, product);
    });

    this.Then(/^Stock is not empty$/, () => {
        expect(stockLib.getStock()).to.not.be.empty;
    });

    this.Then(/^Stock contains (\d+) units of (.*)$/, (units, productName) => {
        const product = stockLib.getStock(productName);
        expect(product.units).to.be.eql(units);
    });
    
};
