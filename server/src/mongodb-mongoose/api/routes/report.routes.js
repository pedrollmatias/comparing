'use strict';

const express = require('express');
const router = express.Router();
const { reportService } = require('../../services');
const { timer } = require('../../../modules');

module.exports = (app) => {
  app.use('/reports', router);

  router.get('/get-sales-amount-total-by-date-range', async (req, res, next) => {
    try {
      timer.startTimer();

      const startDate = new Date(req.query.startDate);
      const endDate = new Date(req.query.endDate);
      const query = { date: { $gte: startDate, $lte: endDate } };

      const salesReport = await reportService.getSalesAmountTotalByDateRange(query);

      const diffTime = timer.diffTimer();

      res.send({ res: salesReport, time: diffTime });
    } catch (err) {
      next(err);
    }
  });

  router.get('/get-sales-by-category-by-date-range', async (req, res, next) => {
    try {
      timer.startTimer();

      const startDate = new Date(req.query.startDate);
      const endDate = new Date(req.query.endDate);
      const query = { date: { $gte: startDate, $lte: endDate } };

      const salesReport = await reportService.getSalesByCategoryByDateRange(query);

      const diffTime = timer.diffTimer();

      res.send({ res: salesReport, time: diffTime });
    } catch (err) {
      next(err);
    }
  });

  router.get('/get-advanced-sales-report', async (req, res, next) => {
    // try {
    //   timer.startTimer();
    //   const query = {};
    //   if (req.body.categories) {
    //     query = { ...query, 'products.category': { $in: req.body.categories } };
    //   }
    //   if (req.body.units) {
    //     query = { ...query, 'products.unit.unitRef': { $in: req.body.units } };
    //   }
    //   if (req.body.paymentMethods) {
    //     query = { ...query, 'products.paymentMethod.paymentMethodRef': { $in: req.body.paymentMethods } };
    //   }
    //   if (req.body.sellers) {
    //     query = { ...query, seller: { $in: req.body.sellers } };
    //   }
    //   // const query = { date: { $gte: startDate, $lte: endDate } };
    //   // const salesReport = await reportService.getSalesByCategoryByDateRange(query);
    //   // const diffTime = timer.diffTimer();
    //   res.send({ res: salesReport, time: diffTime });
    // } catch (err) {
    //   next(err);
    // }
  });
};
