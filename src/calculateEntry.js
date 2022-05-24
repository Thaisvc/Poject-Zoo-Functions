/* eslint-disable */
const data = require('../data/zoo_data');

let child = 0;
let adult = 0;
let senior = 0;
function countEntrants(entrants) {
  return entrants.reduce((acumulador, valorAtual) => {
    if (valorAtual.age >= 1 && valorAtual.age < 18) {
      console.log(valorAtual.age ,'aki');
       childs = acumulador;
    } else if (valorAtual.age >= 18 && valorAtual.age < 50) {
       adult = acumulador;
    } else if (valorAtual.age >= 50) {
       senior = acumulador;
    }

    return {child: childs, adult: adult, senior: senior  }
  })

}
console.log(countEntrants([
	{ name:  'Lara Carvalho', age:  3 },
	{ name:  'Frederico Moreira', age:  3 },
	{ name:  'Pedro Henrique Carvalho', age:  3 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
]));

function calculateEntry(entrants) {
}

module.exports = { calculateEntry, countEntrants };
