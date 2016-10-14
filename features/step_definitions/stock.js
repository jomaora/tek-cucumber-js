'use strict';

const stockLib = require('../../lib/stock');
const {expect} = require('chai');

module.exports = function() {

    this.Given(/^User in session is (.*)$/, function(user) {
        this.user = user;
    });

    this.Given(/^Usuario en sesión es (.*)$/, function(user) {
        this.user = user;
    });

    this.When(/^he add (\d+) units of (.*), item price: (.*)\$$/, function(units, name, price) {
        const product = {units: parseInt(units), name, price: parseFloat(price)};
        try {
            stockLib.addProduct(this.user, product);
        }
        catch (err) {
            this.err = err;
        }
    });

    this.When(/^Él agrega (\d+) unidades de (.*), precio por item: (.*)\$$/, function(units, name, price) {
        const product = {units: parseInt(units), name, price: parseFloat(price)};
        try {
            stockLib.addProduct(this.user, product);
        }
        catch (err) {
            this.err = err;
        }
    });

    this.Then(/^Stock is not empty$/, () => {
        expect(stockLib.getStock()).to.not.be.empty;
    });

    this.Then(/^El Stock no está vacío$/, () => {
        expect(stockLib.getStock()).to.not.be.empty;
    });

    this.Then(/^Stock contains (\d+) units of (.*)$/, function(units, productName) {
        const product = stockLib.getStock(productName);
        expect(product.units).to.be.eql(parseInt(units));
    });

    this.Then(/^El Stock contiene (\d+) unidades de (.*)$/, function(units, productName) {
        const product = stockLib.getStock(productName);
        expect(product.units).to.be.eql(parseInt(units));
    });

    this.Then(/^Stock should not contain (.*)/, function(productName) {
        const product = stockLib.getStock(productName);
        expect(product).to.be.undefined;
    });

    this.Then(/^An error (.*) should be thrown$/, function(message) {
        expect(this.err).to.not.be.undefined;
        expect(this.err.message).to.be.eql(message);
    });
};
