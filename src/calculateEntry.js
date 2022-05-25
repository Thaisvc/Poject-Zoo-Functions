const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childV = entrants.filter((entrant) => entrant.age < 18);
  const adultVi = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const seniorV = entrants.filter((entrant) => entrant.age >= 50);
  const visitas = {
    child: childV.length,
    adult: adultVi.length,
    senior: seniorV.length,
  };
  return visitas;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) { return 0; }
  const visitantes = countEntrants(entrants);
  const childPreco = visitantes.child * data.prices.child;
  const adultPreco = visitantes.adult * data.prices.adult;
  const seniorPreco = visitantes.senior * data.prices.senior;
  const totalPreco = childPreco + adultPreco + seniorPreco;
  return totalPreco;
}

module.exports = { calculateEntry, countEntrants };
