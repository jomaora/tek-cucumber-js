'use strict';

const _ = require('lodash');

let STOCK = [];

const getStock = (name) => {
    if (!name) {
        return STOCK;
    }
    return _.find(STOCK, {name: name});
}

const addProduct = (user, product) => {
    let stockProduct = _.find(STOCK, {name: product.name});
    if (!stockProduct) {
        STOCK.push(product);
    }
};

const service = {
    getStock,
    addProduct
}

module.exports = service;