'use strict';

const stockLib = require('../../lib/stock');
const {expect} = require('chai');

module.exports = function() {

	this.Given(/^A stock having$/, function (table) {
		table.rows().forEach(([name, units, price]) => {
			const product = {units: parseInt(units), name, price: parseFloat(price)};
			stockLib.addProduct('Admin', product);
		});
   	});

	this.Given(/^User will give (\d+)\$ to pay$/, function (money) {
		this.availableMoney = money;
	});

	this.When(/^User buy (\d+) units of (.*)$/, function (units, productName) {
		this.transaction = stockLib.purchaseProduct(productName, parseInt(units), parseFloat(this.availableMoney));
	});

	this.Then(/^The stock should have (\d+) units of (.*)$/, function (units, name) {
		console.log(stockLib.get(name).units, parseInt(units))
		expect(stockLib.get(name).units).to.be.equal(parseInt(units));
	});

	this.Then(/^User should receive (\d+)\$ as change$/, function (change) {
		expect(this.transaction.change).to.be.equal(parseFloat(change));
	});
};