import { weatherHero } from './weatherHero.js';
import { weatherForecastDay } from './weatherForecastDay.js';
import { weatherFoercastFiveDays } from './weatherForecastFiveDays.js';

document.addEventListener('DOMContentLoaded', function () {
 weatherHero(); // погода
 weatherForecastDay(); // прогноз на 24 часа
 weatherFoercastFiveDays(); // прогноз на 5 дней

 // поле ввода
 const inputHeader = document.getElementById('input');
 const searchInputHeader = document.getElementById('search');
 const closeInputHeader = document.getElementById('close');

 inputHeader.addEventListener('input', () => {
  console.log(inputHeader.value);
 });

 inputHeader.addEventListener('focus', () => {
  searchInputHeader.classList.add('header__search-none');
  closeInputHeader.classList.add('header__close-add');
 });

 inputHeader.addEventListener('blur', () => {
  if (!inputHeader.value) {
   searchInputHeader.classList.remove('header__search-none');
   closeInputHeader.classList.remove('header__close-add');
  }
 });

 closeInputHeader.addEventListener('click', (e) => {
  e.preventDefault();
  inputHeader.value = '';
  closeInputHeader.classList.remove('header__close-add');
  searchInputHeader.classList.remove('header__search-none');
 });

 // скролл
 function scrollTabcontent() {
  const tabcontent = document.querySelector('.show-tabcontent');
  const scrollLeftBtn = document.querySelector('.button-left');
  const scrollRightBtn = document.querySelector('.button-right');

  if (tabcontent.scrollLeft === 0) {
   scrollLeftBtn.classList.add('button-disabled');
  } else {
   scrollLeftBtn.classList.remove('button-disabled');
  }

  if (
   tabcontent.scrollLeft >=
   tabcontent.scrollWidth - tabcontent.offsetWidth
  ) {
   scrollRightBtn.classList.add('button-disabled');
  } else {
   scrollRightBtn.classList.remove('button-disabled');
  }

  scrollLeftBtn.addEventListener('click', function () {
   tabcontent.scrollBy({
    left: -200,
    behavior: 'smooth',
   });
  });

  scrollRightBtn.addEventListener('click', function () {
   tabcontent.scrollBy({
    left: 200,
    behavior: 'smooth',
   });

   tabcontent.addEventListener('scroll', () => {
    if (tabcontent.scrollLeft === 0) {
     scrollLeftBtn.classList.add('button-disabled');
    } else {
     scrollLeftBtn.classList.remove('button-disabled');
    }

    if (
     tabcontent.scrollLeft >=
     tabcontent.scrollWidth - tabcontent.offsetWidth
    ) {
     scrollRightBtn.classList.add('button-disabled');
    } else {
     scrollRightBtn.classList.remove('button-disabled');
    }
   });
  });
 }

 scrollTabcontent();

 // табы
 function showTab(tabButton) {
  const tabContainer = tabButton.closest('.forecast__container');

  if (tabButton.classList.contains('is-active')) {
   return;
  }

  const tabButtonId = tabButton.dataset.targetId;
  const tabcontent = document.querySelector(
   `.forecast__list-tabcontent[id="${tabButtonId}"]`
  );

  if (tabcontent) {
   const tabButtonActive = tabContainer.querySelector('.is-active');
   tabButtonActive.classList.remove('is-active');

   const tabcontentShow = tabContainer.querySelector('.show-tabcontent');
   tabcontentShow.classList.remove('show-tabcontent');

   tabButton.classList.add('is-active');
   tabcontent.classList.add('show-tabcontent');

   tabcontent.scrollTo(0, 0);
  }
 }

 document.addEventListener('click', (e) => {
  if (e.target && !e.target.closest('.forecast__tablink')) {
   return;
  }

  const tabButton = e.target.closest('.forecast__tablink');

  showTab(tabButton);

  scrollTabcontent();
 });
});
