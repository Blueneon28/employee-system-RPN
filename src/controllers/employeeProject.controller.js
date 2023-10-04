const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { employeeProjectService } = require('../services');

const createEmployeeProject = catchAsync(async (req, res) => {
  const employeeProjects = await employeeProjectService.createEmployeeProject(req.body);

  res.status(httpStatus.CREATED).send({
    status: httpStatus.CREATED,
    message: 'Create EmployeeProject Success',
    data: employeeProjects,
  });
});

const getEmployeeProjects = catchAsync(async (req, res) => {
  const filter = {};
  const options = {
    sortBy: req.query.sortBy,
    limit: req.query.limit,
    page: req.query.page,
  };
  const result = await employeeProjectService.queryEmployeeProjects(filter, options);

  res.status(httpStatus.OK).send({
    status: httpStatus.OK,
    message: 'Get EmployeeProjects Success',
    data: result,
  });
});

const getEmployeeProject = catchAsync(async (req, res) => {
  const employeeProjects = await employeeProjectService.getEmployeeProjectById(req.params.employeeProjectsId);
  if (!employeeProjects) {
    throw new ApiError(httpStatus.NOT_FOUND, 'EmployeeProject not found');
  }

  res.status(httpStatus.OK).send({
    status: httpStatus.OK,
    message: 'Get EmployeeProject Success',
    data: employeeProjects,
  });
});

const updateEmployeeProject = catchAsync(async (req, res) => {
  const employeeProjects = await employeeProjectService.updateEmployeeProjectById(req.params.employeeProjectsId, req.body);

  res.status(httpStatus.OK).send({
    status: httpStatus.OK,
    message: 'Update EmployeeProject Success',
    data: employeeProjects,
  });
});

const deleteEmployeeProject = catchAsync(async (req, res) => {
  await employeeProjectService.deleteEmployeeProjectById(req.params.employeeProjectsId);

  res.status(httpStatus.OK).send({
    status: httpStatus.OK,
    message: 'Delete EmployeeProject Success',
    data: null,
  });
});

module.exports = {
  createEmployeeProject,
  getEmployeeProjects,
  getEmployeeProject,
  updateEmployeeProject,
  deleteEmployeeProject,
};
