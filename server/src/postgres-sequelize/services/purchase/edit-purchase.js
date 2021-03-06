'use strict';

const { Purchase, PurchaseProduct, History } = require('../../models');
const getProduct = require('../product/get-product');

module.exports = async function editPurchase(purchaseId, purchase) {
  let [, updatedPurchase] = await Purchase.update(purchase, {
    where: { _id: purchaseId },
    returning: true,
    plain: true,
  });

  updatedPurchase = updatedPurchase.dataValues;

  for (const product of purchase.products) {
    const _product = await getProduct(product.productId);
    const purchaseProductRelation = await PurchaseProduct.findOne({
      where: { productId: _product._id, purchaseId: updatedPurchase._id },
    });

    const amountDifference = product.amount - purchaseProductRelation.toJSON().amount;

    if (amountDifference > 0) {
      const history = await History.create({
        amount: product.amount,
        movementType: '100',
        purchaseId: updatedPurchase._id,
      });

      await _product.addHistory(history);

      _product.currentAmount += amountDifference;

      await _product.save();
    } else if (amountDifference < 0) {
      const history = await History.create({
        amount: product.amount,
        movementType: '200',
        purchaseId: updatedPurchase._id,
      });

      await _product.addHistory(history);

      _product.currentAmount -= amountDifference;

      await _product.save();
    }

    purchaseProductRelation.amount = product.amount;
    purchaseProductRelation.price = product.price;

    await purchaseProductRelation.save();
  }

  return updatedPurchase;
};
