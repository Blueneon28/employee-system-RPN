const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const projectService = require('../services/project.service');

const getProjects = catchAsync(async (req, res) => {
  const filter = {};
  const options = {
    sortBy: req.query.sortBy,
    limit: req.query.limit,
    page: req.query.page,
  };
  const result = await projectService.getProjects(filter, options);

  res.status(httpStatus.OK).send({
    status: httpStatus.OK,
    message: 'Get Project Success',
    data: result,
  });
});

const getProjectById = catchAsync(async (req, res) => {
  const project = await projectService.getProjectById(req.params.projectId);
  res.status(httpStatus.OK).send({
    status: httpStatus.OK,
    message: 'Get Project By Id Success!',
    data: project,
  });
});

const createProject = catchAsync(async (req, res) => {
  const project = await projectService.createProject(req.body);
  res.status(httpStatus.CREATED).send({
    status: httpStatus.CREATED,
    message: 'Create Project Success!',
    data: project,
  });
});

const updateProjectById = catchAsync(async (req, res) => {
  const project = await projectService.updateProjectById(req.params.projectId, req.body);
  res.status(httpStatus.OK).send({
    status: httpStatus.OK,
    message: 'Update Project By Id Success!',
    data: project,
  });
});

const deleteProjectById = catchAsync(async (req, res) => {
  const project = await projectService.deleteProjectById(req.params.projectId);
  res.status(httpStatus.OK).send({
    status: httpStatus.OK,
    message: 'Delete Project Success!',
    data: project,
  });
});

module.exports = { getProjects, getProjectById, createProject, updateProjectById, deleteProjectById };
