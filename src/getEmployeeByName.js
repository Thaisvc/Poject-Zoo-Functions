/* eslint-disable */
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    return data.employees.find((person) => person.firstName === employeeName || person.lastName === employeeName)
  }
  return {}
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
