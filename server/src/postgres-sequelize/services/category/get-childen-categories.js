'use strict';

const { Category } = require('../../models');
const { Op } = require('sequelize');

module.exports = function getChildrenCategories(name) {
  return Category.findAll({
    where: { path: { [Op.or]: [{ [Op.like]: `% > ${name} > %` }, { [Op.like]: `${name} > %` }] } },
    raw: true,
  });
};
