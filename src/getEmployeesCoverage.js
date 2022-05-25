const data = require('../data/zoo_data');

const { employees, species } = data;

const getSpecies = ({ responsibleFor }) => responsibleFor.map((specie) => species
  .find(({ id }) => id === specie).name);

const getlocations = (arrayOfSpecies) => arrayOfSpecies.map((specie) => species
  .find(({ name }) => name === specie).location);

const getEmployeeData = (dataEmployee) => {
  const { firstName, lastName, id } = dataEmployee;
  return ({
    id,
    fullName: `${firstName} ${lastName}`,
    species: getSpecies(dataEmployee),
    locations: getlocations(getSpecies(dataEmployee)),
  });
};

const getAllData = () => employees.map((linha) => getEmployeeData(linha));

const validateData = (EmployeeData) => {
  const value = Object.values(EmployeeData);
  const dataEmployee = employees
    .find(({ firstName, lastName, id }) => value.includes(firstName) || value
      .includes(lastName) || value.includes(id));
  if (!dataEmployee) throw new Error('Informações inválidas');
  return getEmployeeData(dataEmployee);
};

function getEmployeesCoverage(EmployeeData) {
  return (!EmployeeData) ? getAllData() : validateData(EmployeeData);
}

module.exports = getEmployeesCoverage;
