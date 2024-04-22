import { forecastFiveDaysData } from './forecastFiveDaysData.js';

export const weatherFoercastFiveDays = () => {
 const listForecasFivetDays = document.getElementById(
  'list-forecast-five-days'
 );

 function createForecastFiveDaysCard(
  day,
  pathIcon,
  temperatureMin,
  temperatureMax
 ) {
  const itemForecastFiveDays = document.createElement('li');
  itemForecastFiveDays.classList.add('forecast__list-item');

  const dayForecastFiveDaysCard = document.createElement('p');
  dayForecastFiveDaysCard.classList.add('forecast__list-desc');
  dayForecastFiveDaysCard.textContent = day;

  const iconForecastFiveDaysCard = document.createElement('span');
  iconForecastFiveDaysCard.classList.add('forecast__list-icon');
  iconForecastFiveDaysCard.style.backgroundImage = pathIcon;

  const temperatureDesc = document.createElement('p');
  temperatureDesc.classList.add('forecast__list-desc');
  temperatureDesc.textContent = `от ${temperatureMin}\u00B0 до ${temperatureMax}\u00B0`;

  itemForecastFiveDays.append(
   dayForecastFiveDaysCard,
   iconForecastFiveDaysCard,
   temperatureDesc
  );

  return itemForecastFiveDays;
 }

 for (let i = 0; i < forecastFiveDaysData.length; i++) {
  let itemElement = createForecastFiveDaysCard(
   forecastFiveDaysData[i].day,
   forecastFiveDaysData[i].icon,
   forecastFiveDaysData[i].temperatureMin,
   forecastFiveDaysData[i].temperatureMax
  );

  listForecasFivetDays.append(itemElement);
 }
};
