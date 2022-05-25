const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employee) {
  if (employee !== undefined) {
    return employees.find((pson) => pson.firstName === employee || pson.lastName === employee);
  }
  return {};
}
/* console.log(getEmployeeByName()); */
module.exports = getEmployeeByName;
