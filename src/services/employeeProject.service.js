const httpStatus = require('http-status');
const prisma = require('../../prisma/client');
const ApiError = require('../utils/ApiError');

/**
 * Create a employeeProject
 * @param {Object} employeeProjectBody
 * @returns {Promise<EmployeeProject>}
 */
const createEmployeeProject = async (employeeProjectBody) => {
  return prisma.employeeProjects.create({
    data: employeeProjectBody,
  });
};

/**
 * Query for employeeProjects
 * @returns {Promise<QueryResult>}
 */
const queryEmployeeProjects = async (filter, options) => {
  const { sortBy, page, limit } = !options;
  const employeeProjects = await prisma.employeeProjects.findMany({
    skip: page && parseInt(page),
    take: limit && parseInt(limit),
    // orderBy: {
    //     createdAt: sortBy ? sortBy : 'desc'
    // }
  });
  return employeeProjects;
};

/**
 * Get employeeProject by id
 * @param {ObjectId} id
 * @returns {Promise<EmployeeProject>}
 */
const getEmployeeProjectById = async (id) => {
  return prisma.employeeProjects.findFirst({
    where: {
      id,
    },
  });
};

/**
 * Update employeeProject by id
 * @param {ObjectId} employeeProjectId
 * @param {Object} updateBody
 * @returns {Promise<EmployeeProject>}
 */
const updateEmployeeProjectById = async (employeeProjectId, updateBody) => {
  const employeeProject = await getEmployeeProjectById(employeeProjectId);
  if (!employeeProject) {
    throw new ApiError(httpStatus.NOT_FOUND, 'EmployeeProject not found');
  }

  const updateEmployeeProject = await prisma.employeeProjects.update({
    where: {
      id: employeeProjectId,
    },
    data: updateBody,
  });

  return updateEmployeeProject;
};

/**
 * Delete employeeProject by id
 * @param {ObjectId} employeeProjectId
 * @returns {Promise<EmployeeProject>}
 */
const deleteEmployeeProjectById = async (employeeProjectId) => {
  const employeeProject = await getEmployeeProjectById(employeeProjectId);
  if (!employeeProject) {
    throw new ApiError(httpStatus.NOT_FOUND, 'EmployeeProject not found');
  }

  const deleteEmployeeProjects = await prisma.employeeProjects.deleteMany({
    where: {
      id: employeeProjectId,
    },
  });

  return deleteEmployeeProjects;
};

module.exports = {
  createEmployeeProject,
  queryEmployeeProjects,
  getEmployeeProjectById,
  updateEmployeeProjectById,
  deleteEmployeeProjectById,
};
