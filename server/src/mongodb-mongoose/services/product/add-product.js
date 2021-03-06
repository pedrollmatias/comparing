'use strict';

const { productModel } = require('../../models');
const { addProduct: addProductInCategory } = require('../category');

module.exports = async function addProduct(productData, session) {
  const _productData = appendProductDataHistorytMovement({ ...productData });
  const productDoc = await productModel.add(_productData, session);

  await productDoc
    .populate([
      { path: 'category', select: 'name' },
      { path: 'unit', select: ['unit', 'shortUnit'] },
    ])
    .execPopulate();

  await addProductInCategory(productDoc.category, productDoc, session);

  return productDoc;
};

function appendProductDataHistorytMovement(productData) {
  if (productData.currentAmount > 0) {
    return { ...productData, history: [{ movementType: '100', amount: productData.currentAmount }] };
  }

  return productData;
}
