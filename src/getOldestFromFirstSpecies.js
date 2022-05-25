const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  let old = data.employees.filter((obj) => obj.id === id)
    .map((specie) => specie.responsibleFor[0]);
  old = data.species.find((obj) => obj.id === old[0]);
  old = old.residents.sort((a, b) => b.age - a.age);
  return Object.values(old[0]);
}

module.exports = getOldestFromFirstSpecies;
