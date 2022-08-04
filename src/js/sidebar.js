const $closeBtn = document.querySelector('.mobile-close');
const $hamburgerBtn = document.querySelector('.mobile-btn-hamburger');
const $sidebar = document.querySelector('.nav-bar-viewport');
const $bgBox = document.querySelector('.mobile-nav-back');
const $searchBtn = document.querySelector('.mobile-icon-search');
const $body = document.querySelector('body');

function openMenu(time) {
  $sidebar.classList.remove('hidden');
  $closeBtn.classList.remove('hidden');
  $bgBox.classList.remove('max-md:hidden');
  $searchBtn.classList.remove('hidden');
  $body.classList.add('overflow-hidden');
  setTimeout(() => {
    $sidebar.classList.add('is--active');
    $closeBtn.classList.add('is--active');
    $bgBox.classList.add('is--active');
  }, time);
}

function hideMenu(time) {
  $sidebar.classList.remove('is--active');
  $closeBtn.classList.remove('is--active');
  $bgBox.classList.remove('is--active');
  setTimeout(() => {
    $sidebar.classList.add('hidden');
    $closeBtn.classList.add('hidden');
    $bgBox.classList.add('max-md:hidden');
    $searchBtn.classList.add('hidden');
    $body.classList.remove('overflow-hidden');
  }, time);
}

$closeBtn.addEventListener('click', () => {
  hideMenu(300);
});
$bgBox.addEventListener('click', () => {
  hideMenu(300);
});
$hamburgerBtn.addEventListener('click', () => openMenu(100));
