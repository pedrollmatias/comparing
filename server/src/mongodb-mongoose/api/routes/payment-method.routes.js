'use strict';

const express = require('express');
const router = express.Router();
const { paymentMethodService } = require('../../services');
const { timer } = require('../../../modules');
const { withTransaction } = require('../middlewares');

module.exports = (app) => {
  app.use('/payment-methods', router);

  router.get('/', async (req, res, next) => {
    try {
      timer.startTimer();

      const paymentMethods = await paymentMethodService.get(req.query);

      const diffTime = timer.diffTimer();

      res.send({ res: paymentMethods, time: diffTime });
    } catch (err) {
      next(err);
    }
  });

  router.post('/add', async (req, res, next) => {
    try {
      timer.startTimer();

      const paymentMethod = await paymentMethodService.add(req.body);

      const diffTime = timer.diffTimer();

      res.send({ res: paymentMethod, time: diffTime });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:paymentMethodId', async (req, res, next) => {
    try {
      timer.startTimer();

      const paymentMethods = await paymentMethodService.query(req.params.paymentMethodId);

      const diffTime = timer.diffTimer();

      res.send({ res: paymentMethods, time: diffTime });
    } catch (err) {
      next(err);
    }
  });

  router.post('/:paymentMethodId', async (req, res, next) => {
    try {
      timer.startTimer();

      const paymentMethod = await withTransaction(async (session) => {
        return paymentMethodService.edit(req.params.paymentMethodId, req.body, session);
      });

      const diffTime = timer.diffTimer();

      res.send({ res: paymentMethod, time: diffTime });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:paymentMethodId', async (req, res, next) => {
    try {
      timer.startTimer();

      await withTransaction(async (session) => {
        return paymentMethodService.remove(req.params.paymentMethodId, session);
      });

      const diffTime = timer.diffTimer();

      res.send({ res: { status: 200 }, time: diffTime });
    } catch (err) {
      next(err);
    }
  });
};
