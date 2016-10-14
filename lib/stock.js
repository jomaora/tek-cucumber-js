'use strict';

const _ = require('lodash');

let STOCK = [];
let ALLOWED_USERS = ['Admin'];

const getStock = (name) => {
    if (!name) {
        return STOCK;
    }
    return _.find(STOCK, {name: name});
}

const addProduct = (user, product) => {
    if (!_.includes(ALLOWED_USERS, user)) {
        throw new Error('Unauthorized');
    }

    let stockProduct = _.find(STOCK, {name: product.name});
    if (!stockProduct) {
        STOCK.push(product);
    }
};

const purchaseProduct = (productName, desiredUnits, availableMoney) => {
    const product = getStock(productName);
    if (_.isEmpty(product)) {
        return { 
            success: false,
            error: 'unavailable product'
        };
    }

    if (product.units < desiredUnits) {
        return { 
            success: false,
            error: 'unavailable quantity'
        };
    }

    const change = availableMoney - (product.price * desiredUnits);
    if (change < 0) {
        return { 
            success: false,
            error: 'not enough money to buy'
        };
    }

    product.units = product.units - desiredUnits;
    return {
        success: true,
        change: change
    };
}

const service = {
    getStock,
    addProduct,
    purchaseProduct
}

module.exports = service;