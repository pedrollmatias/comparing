'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');

module.exports = (app, serverId) => {
  const dirPath = path.join(__dirname, `api-${serverId}`, 'purchase.api');
  const api = require(dirPath);

  app.use('/purchases', router);

  router.route('/').get(api.get);

  router.route('/create').post(api.create);

  router.route('/:purchaseId').get(api.query).post(api.edit).delete(api.remove);
};
