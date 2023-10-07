const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);

  // res.status(httpStatus.CREATED).send({
  //   status: httpStatus.CREATED,
  //   message: 'Create User Success',
  //   data: user,
  // });
  res.render('success.view.ejs', {
    message: 'Create User Success',
    redirectUrl: '/v1/users',
  });
});

const getUsers = catchAsync(async (req, res) => {
  const result = await userService.queryUsers();

  // res.status(httpStatus.OK).send({
  //   status: httpStatus.OK,
  //   message: 'Get Users Success',
  //   data: result,
  // });

  res.render('users/getUsers.view.ejs', {
    users: result,
  });
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  // res.status(httpStatus.OK).send({
  //   status: httpStatus.OK,
  //   message: 'Get User Success',
  //   data: user,
  // });
  res.render('users/detailUser.view.ejs', {
    user: user,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);

  // res.status(httpStatus.OK).send({
  //   status: httpStatus.OK,
  //   message: 'Update User Success',
  //   data: user,
  // });
  res.render('success.view.ejs', {
    message: 'Update User Success',
    redirectUrl: '/v1/users',
  });
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);

  // res.status(httpStatus.OK).send({
  //   status: httpStatus.OK,
  //   message: 'Delete User Success',
  //   data: null,
  // });
  res.render('success.view.ejs', {
    message: 'Delete User Success',
    redirectUrl: '/v1/users',
  });
});

const editUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);

  res.render('users/editUser.view.ejs', {
    user,
  });
});

module.exports = {
  createUser,
  editUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
