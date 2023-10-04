const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createEmployeeProject = {
  body: Joi.object().keys({
    userId: Joi.string().required().custom(objectId),
    projectId: Joi.string().required().custom(objectId),
  }),
};

const getEmployeeProjects = {
  query: Joi.object().keys({
    userId: Joi.string().custom(objectId),
    projectId: Joi.string().custom(objectId),
    sortBy: Joi.string().valid('asc', 'desc'),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getEmployeeProject = {
  params: Joi.object().keys({
    employeeProjectId: Joi.string().custom(objectId),
  }),
};

const updateEmployeeProject = {
  params: Joi.object().keys({
    employeeProjectId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      userId: Joi.string().required().custom(objectId),
      projectId: Joi.string().required().custom(objectId),
    })
    .min(1),
};

const deleteEmployeeProject = {
  params: Joi.object().keys({
    employeeProjectId: Joi.string().required().custom(objectId),
  }),
};

module.exports = {
  createEmployeeProject,
  getEmployeeProjects,
  getEmployeeProject,
  updateEmployeeProject,
  deleteEmployeeProject,
};
