'use strict';

const stockLib = require('../../lib/stock');
const {expect} = require('chai');

module.exports = function() {

	this.Given(/^The stock has (\d+) units of (.*), item price (.*)\$$/, function (units, name, price) {
		const product = {units, name, price};
		stockLib.addProduct('Admin', product);
	});

	this.Given(/^User will give (\d+)\$ to pay$/, function (money) {
		this.availableMoney = money;
	});

	this.When(/^User buy (\d+) units of (.*)$/, function (unit, productName, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback(null, 'pending');
	});

	this.Then(/^The stock should have (\d+) units of (.*)$/, function (units, name) {
		expect(stockLib.get(name).units).to.be.equal(units);
	});

	this.Then(/^User should receive (\d+)\$ as change$/, function (change, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback(null, 'pending');
	});
};