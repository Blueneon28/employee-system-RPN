const allRoles = {
  user: ['getEmployeeProjects', 'manageEmployeeProjects', 'getProjects'],
  admin: ['getUsers', 'manageUsers', 'getEmployeeProjects', 'manageEmployeeProjects', 'getProjects', 'getProject', 'updateProject', 'deleteProject'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
