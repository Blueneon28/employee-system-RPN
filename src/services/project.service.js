const nodemailer = require('nodemailer');
const config = require('../config/config');
const logger = require('../config/logger');
const httpStatus = require('http-status');
const prisma = require('../../prisma/client');
const ApiError = require('../utils/ApiError');

const getProjects = async (filter, options) => {
  const { sortBy, page, limit } = !options;
  const project = await prisma.projects.findMany({
    skip: page && parseInt(page),
    take: limit && parseInt(limit),
  });
  return project;
};

/**
 * Get Project by id
 * @param {ObjectId} id
 * @returns {Promise<Category>}
 */

const getProjectById = async (id) => {
  return prisma.projects.findUnique({
    where: {
      id,
    },
  });
};

const createProject = async (projectBody) => {
  return prisma.projects.create({ data: projectBody });
};

/**
 * Update project by id
 * @param {ObjectId} projectId
 * @param {Object} projectBody
 * @returns {Promise<Category>}
 */
const updateProjectById = async (projectId, projectBody) => {
  const project = await getProjectById(projectId);
  if (!project) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Project not found');
  }

  const updateProject = await prisma.projects.update({
    where: {
      id: projectId,
    },
    data: projectBody,
  });

  return updateProject;
};

/**
 * delete by id
 * @param {ObjectId} projectId
 * @returns {Promise<Category>}
 */
const deleteProjectById = async (projectId) => {
  const project = await getProjectById(projectId);
  if (!project) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Project not found');
  }

  const deleteProject = await prisma.projects.deleteMany({
    where: {
      id: projectId,
    },
  });

  return deleteProject;
};

module.exports = { getProjects, getProjectById, createProject, updateProjectById, deleteProjectById };
