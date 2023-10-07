const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const projectValidation = require('../../validations/project.validation');
const projectController = require('../../controllers/project.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(projectValidation.createProject), projectController.createProject)
  .get(auth('getProjects'), validate(projectValidation.getProjects), projectController.getProjects);

router
  .route('/:projectId')
  .get(auth('getProject'), validate(projectValidation.getProjectById), projectController.getProjectById)
  .patch(auth('manageUsers'), validate(projectValidation.updateProjectById), projectController.updateProjectById)
  .delete(auth('manageUsers'), validate(projectValidation.deleteProjectById), projectController.deleteProjectById);

module.exports = router;