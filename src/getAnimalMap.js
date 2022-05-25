const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const regiaos = ['NE', 'NW', 'SE', 'SW'];

const getLocations = () => {
  const locations = {};
  const assignAnimalsByLocation = (regiao) => {
    locations[regiao] = species.filter((specie) => specie.location === regiao)
      .map((individual) => individual.name);
  };
  regiaos.forEach((regiao) => assignAnimalsByLocation(regiao));
  return locations;
};

const sortNames = (names) => {
  const sortedNames = {};
  const sortAnimalsNames = (regiao) => {
    sortedNames[regiao] = names[regiao].map((animal) => ({ [Object.keys(animal)[0]]:
      Object.values(animal)[0].sort() }));
  };
  regiaos.forEach((regiao) => sortAnimalsNames(regiao));
  return sortedNames;
};

const getNamesBySex = (names, keys, values) => {
  const sex = values[keys.indexOf('sex')];
  const filteredBySex = {};
  const filtering = (regiao) => {
    filteredBySex[regiao] = names[regiao].map((animal) => ({ [Object.keys(animal)[0]]: species
      .find((specie) => specie.name === Object.keys(animal)[0]).residents.filter((individual) =>
        individual.sex === sex).map((beast) => beast.name) }));
  };
  regiaos.forEach((regiao) => filtering(regiao));
  if (keys.includes('sorted')) return (sortNames(filteredBySex));
  return filteredBySex;
};

const getAnimalsNames = (local, keys, values) => {
  const names = {};
  const assignNames = (region) => {
    names[region] = local[region].map((animal) => ({ [animal]: species.find((specie) => specie
      .name === animal).residents.map((individual) => individual.name) }));
  };
  regiaos.forEach((regiao) => assignNames(regiao));
  if (keys.includes('sex')) return getNamesBySex(names, keys, values);
  if (keys.includes('sorted')) return sortNames(names);
  return names;
};

function getAnimalMap(options) {
  const locations = getLocations();
  if (!options) return locations;
  const keys = Object.keys(options);
  const values = Object.values(options);
  if (!keys.includes('includeNames')) return locations;
  if (keys.includes('includeNames')) return getAnimalsNames(locations, keys, values);
}

module.exports = getAnimalMap;
