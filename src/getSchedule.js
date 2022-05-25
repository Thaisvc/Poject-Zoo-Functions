const data = require('../data/zoo_data');

const openingDays = (day) => {
  if (day === 'Monday') return 'CLOSED';
  const aberto = data.hours[day].open;
  const fechado = data.hours[day].close;
  return `Open from ${aberto}am until ${fechado}pm`;
};

const exhibitionDays = (day) => {
  if (day === 'Monday') return 'The zoo will be closed!';
  return data.species.filter((specie) => specie.availability.includes(day))
    .map((specie) => specie.name);
};

const dayCronogram = (day) => ({ [day]: { officeHour: openingDays(day),
  exhibition: exhibitionDays(day) } });

const setWeekSchedule = () => {
  let weekdays = Object.keys(data.hours);
  weekdays = weekdays.map((day) => ({ [day]: { officeHour: openingDays(day),
    exhibition: exhibitionDays(day) } }));
  return weekdays.reduce((acumulador, valorAtual) => Object.assign(acumulador, valorAtual), {});
};

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    return setWeekSchedule();
  }
  if (scheduleTarget === 'Monday') {
    return dayCronogram('Monday');
  }
  if (data.species.find((obj) => obj.name === scheduleTarget)) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    return dayCronogram(scheduleTarget);
  }
  return setWeekSchedule();
};
module.exports = getSchedule;
