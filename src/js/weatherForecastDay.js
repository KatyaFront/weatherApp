import { forecastDayData } from './forecastDayData.js';

export const weatherForecastDay = () => {
 const listForecastDay = document.getElementById('list-forecast-day');

 function createForecastDayCard(time, pathIcon, temperature) {
  const itemForecastDay = document.createElement('li');
  itemForecastDay.classList.add('forecast__list-item');

  const timeForecastDayCard = document.createElement('p');
  timeForecastDayCard.classList.add('forecast__list-desc');
  timeForecastDayCard.textContent = time;

  const iconForecastDayCard = document.createElement('span');
  iconForecastDayCard.classList.add('forecast__list-icon');
  iconForecastDayCard.style.backgroundImage = pathIcon;

  const temperatureForecastDayCard = document.createElement('p');
  temperatureForecastDayCard.classList.add('forecast__list-desc');
  temperatureForecastDayCard.textContent = `${temperature}\u00B0`;

  itemForecastDay.append(
   timeForecastDayCard,
   iconForecastDayCard,
   temperatureForecastDayCard
  );

  return itemForecastDay;
 }

 for (let i = 0; i < forecastDayData.length; i++) {
  let itemElement = createForecastDayCard(
   forecastDayData[i].time,
   forecastDayData[i].icon,
   forecastDayData[i].temperature
  );

  listForecastDay.append(itemElement);
 }
};
