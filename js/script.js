const hamburger = document.querySelector('.hamburger');
const searchBtn = document.querySelector('.search__btn');
const searchCloseBtn = document.querySelector('.search__close-btn');

searchBtn.addEventListener('click', () => {
  const search = document.querySelector('.header__nav-search');
  search.classList.toggle('header__nav-search--active');
});

if (searchCloseBtn)
  searchCloseBtn.addEventListener('click', () => {
    const search = document.querySelector('.header__nav-search');
    search.classList.remove('header__nav-search--active');
  });

document.documentElement.addEventListener('click', (e) => {
  const search = document.querySelector('.header__nav-search');
  if (
    search.classList.contains('header__nav-search--active') &&
    e.target.contains(search)
  ) {
    search.classList.remove('header__nav-search--active');
  }
});

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

isMobile.any()
  ? document.body.classList.add('mobile')
  : document.body.classList.add('pc');

hamburger.addEventListener('click', (e) => {
  const menu = document.querySelector('.header__nav');
  menu.classList.toggle('header__nav--active');
  hamburger.classList.toggle('hamburger--active');
  document.body.classList.toggle('lock');
});

const menuLinks = Array.from(document.querySelectorAll('.site-nav__link'));

menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    link.classList.toggle('site-nav__link--active');
  });
});

const swiper1 = new Swiper('.top .swiper-container', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.top .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.top .swiper-button-next',
    prevEl: '.top .swiper-button-prev',
  },
  autoHeight: true,
  spaceBetween: 32,
  slidesPerView: 'auto',
});

const swiper2 = new Swiper('.rooms .swiper-container', {
  direction: 'horizontal',
  pagination: {
    el: '.rooms .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.rooms .swiper-button-next',
    prevEl: '.rooms .swiper-button-prev',
  },
  spaceBetween: 24,
  slidesPerView: 'auto',
});
