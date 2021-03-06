'use strict';

const { userModel } = require('../../models');

module.exports = async function editUser(userId, data) {
  const user = await userModel.retrieve(userId);

  return user.edit(data);
};
