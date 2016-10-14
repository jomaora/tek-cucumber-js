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

};

const service = {
    getStock,
    addProduct
}

module.exports = service;