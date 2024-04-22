import { weatherData } from './weatherData.js';

export const weatherHero = () => {
 const listCards = document.getElementById('list');

 function createWeatherCard(
  textTitle,
  pathIcon,
  textIndicator,
  textDesc,
  addProgress,
  progressMax,
  progressValue
 ) {
  const item = document.createElement('li');
  item.classList.add('list__item');

  const block = document.createElement('div');
  block.classList.add('list__block');

  const titleWeatherCard = document.createElement('h2');
  titleWeatherCard.classList.add('list__title');
  titleWeatherCard.textContent = textTitle;

  const iconWeatherCard = document.createElement('span');
  iconWeatherCard.classList.add('list__span');
  iconWeatherCard.style.backgroundImage = pathIcon;

  const indicatorWeatherCard = document.createElement('p');
  indicatorWeatherCard.classList.add('list__indicator');
  indicatorWeatherCard.textContent = textIndicator;

  block.append(titleWeatherCard, iconWeatherCard, indicatorWeatherCard);
  item.append(block);

  if (addProgress) {
   const progressWrapper = document.createElement('div');
   progressWrapper.classList.add('list__progress-wrapper');

   const progress = document.createElement('div');
   progress.classList.add('list__progress');

   const progressSlider = document.createElement('div');
   progressSlider.classList.add('list__progress-slider');

   if (window.matchMedia('(min-width: 200px) and (max-width: 767px)').matches) {
    progress.style.mask = `radial-gradient(circle at ${
     (progressValue / progressMax) * 100
    }%, transparent 5px, black 5px)`;
    progressSlider.style.left = `calc(${
     (progressValue / progressMax) * 100
    }% - 3px)`;
   } else {
    progress.style.mask = `radial-gradient(circle at ${
     (progressValue / progressMax) * 100
    }%, transparent 6px, black 6px)`;
    progressSlider.style.left = `calc(${
     (progressValue / progressMax) * 100
    }% - 4px)`;
   }

   if (textTitle === 'Давление') {
    progress.classList.add('list__progress_gradient');
   }
   progressWrapper.append(progress, progressSlider);
   item.append(progressWrapper);
  }

  if (textDesc) {
   const descWeatherCard = document.createElement('p');
   descWeatherCard.classList.add('list__desc');
   descWeatherCard.textContent = textDesc;
   item.append(descWeatherCard);
  } else {
   const blockDesc = document.createElement('div');
   blockDesc.classList.add('list__block-desc');

   const descMinPressure = document.createElement('p');
   descMinPressure.classList.add('list__desc');
   descMinPressure.textContent = '0%';

   const descMaxPressure = document.createElement('p');
   descMaxPressure.classList.add('list__desc');
   descMaxPressure.textContent = '100%';

   blockDesc.append(descMinPressure, descMaxPressure);
   item.append(blockDesc);
  }

  return item;
 }

 for (let i = 0; i < weatherData.length; i++) {
  let itemElement = createWeatherCard(
   weatherData[i].title,
   weatherData[i].icon,
   weatherData[i].indicator,
   weatherData[i].desc,
   weatherData[i].progress,
   weatherData[i].progressMax,
   weatherData[i].progressValue
  );

  listCards.append(itemElement);
 }
};
