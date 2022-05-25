const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    employees.find((psor) => psor.firstName === employeeName || psor.lastName === employeeName);
  }
  return {};
}
/* console.log(getEmployeeByName()); */
module.exports = getEmployeeByName;
