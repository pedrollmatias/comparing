'use strict';

const { purchaseModel } = require('../../models');
const { incrementInventory: incrementProductInventory } = require('../product');

module.exports = async function removePurchase(purchaseId) {
  const purchaseDoc = await purchaseModel.retrieve(purchaseId);

  for (const product of purchaseDoc.products) {
    incrementProductInventory(product._id, product.amount);
  }

  return purchaseDoc.delete();
};
