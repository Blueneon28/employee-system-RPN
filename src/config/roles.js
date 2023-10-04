const allRoles = {
  user: ['getEmployeeProjects', 'manageEmployeeProjects'],
  admin: ['getUsers', 'manageUsers', 'getEmployeeProjects', 'manageEmployeeProjects'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
