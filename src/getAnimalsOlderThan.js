const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const lookForAnimal = data.species.find((specie) => specie.name === animal);
  return lookForAnimal.residents.every((specie) => specie.age >= age);
}

console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
