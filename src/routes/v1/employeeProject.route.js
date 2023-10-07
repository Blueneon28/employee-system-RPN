const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const employeeProjectValidation = require('../../validations/employeeProject.validation');
const employeeProjectController = require('../../controllers/employeeProject.controller');

const router = express.Router();

router
  .route('/')
  .post(
    auth('manageEmployeeProjects'),
    validate(employeeProjectValidation.createEmployeeProject),
    employeeProjectController.createEmployeeProject
  )
  .get(
    auth('getEmployeeProjects'),
    validate(employeeProjectValidation.getEmployeeProjects),
    employeeProjectController.getEmployeeProjects
  );

router.route('/create').get(auth('manageEmployeeProjects'), (req, res) => {
  res.render('employeeProjects/createEmployeeProject.view.ejs');
});

router
  .route('/:employeeProjectId')
  .get(
    auth('getEmployeeProjects'),
    validate(employeeProjectValidation.getEmployeeProject),
    employeeProjectController.getEmployeeProject
  )
  .patch(
    auth('manageEmployeeProjects'),
    validate(employeeProjectValidation.updateEmployeeProject),
    employeeProjectController.updateEmployeeProject
  )
  .delete(
    auth('manageEmployeeProjects'),
    validate(employeeProjectValidation.deleteEmployeeProject),
    employeeProjectController.deleteEmployeeProject
  );

router.route('/edit/:employeeProjectId').get(auth('manageEmployeeProjects'), employeeProjectController.editEmployeeProject);

module.exports = router;
