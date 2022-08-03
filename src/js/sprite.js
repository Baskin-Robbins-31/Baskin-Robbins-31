const $bestImgs = document.querySelectorAll('.best__img--scoop');
const $productImgs = document.querySelectorAll('.product__img--scoop');

const best = {
  'bg-corn_132': 'object-position: -132px -264px;',
  'bg-macadamia_132': 'object-position: -396px -264px;',
  'bg-alien_132': 'object-position: -0 -0;',
  'bg-almond_132': 'object-position: -132px -0;',
  'bg-mintchoco_132': 'object-position: -0 -396px;',
  'bg-newyork_132': 'object-position: -264px -396px;',
  'bg-berry_132': 'object-position: -132px -132px;',
  'bg-rainbow_132': 'object-position: -528px -396px;',
  // 'bg-bg_icecream_corn_3': 'object-position: -264px -528px;',
  // 'bg-bg_icecream_corn_4': 'object-position: -364px -528px;',
  // 'bg-icon_rank_1': 'object-position: -500px -528px;',
  // 'bg-icon_rank_2': 'object-position: -531px -528px;',
  // 'bg-icon_rank_3': 'object-position: -562px -528px;',
  // 'bg-icon_rank_4': 'object-position: -593px -528px;',
  // 'bg-icon_title_1': 'object-position: -460px -568px;',
  // 'bg-icon_title_2': 'object-position: -503px -568px;',
  // 'bg-crown_1': 'object-position: -460px -528px;',
};
const product = {
  'bg-corn_188': 'object-position: -188px -376px',
  'bg-macadamia_188': 'object-position: -0 -564px',
  'bg-ggobugi_188': 'object-position: -376px -376px',
  'bg-pengdori_188': 'object-position: -752px -0',
  'bg-chicorita_188': 'object-position: -0 -376px',
  'bg-chaltteok_188': 'object-position: -376px -188px',
  'bg-pinacolada_188': 'object-position: -752px -188px',
  'bg-happybd_188': 'object-position: -564px -0',
  'bg-oreocream_188': 'object-position: -564px -564px',
  'bg-walnut_188': 'object-position: -752px -564px',
  'bg-blacksorbet_188': 'object-position: -376px -0',
  'bg-vanillacrunch_188': 'object-position: -0 -752px',
  'bg-mango_188': 'object-position: -564px -376px',
  'bg-alien_188': 'object-position: -0 -0',
  'bg-almond_188': 'object-position: -188px -0',
  'bg-mintchoco_188': 'object-position: -188px -564px',
  'bg-loveberry_188': 'object-position: -564px -188px',
  'bg-applemint_188': 'object-position: -0 -188px',
  'bg-newyork_188': 'object-position: -376px -564px',
  'bg-pistachio_188': 'object-position: -752px -376px',
  'bg-berry_188': 'object-position: -188px -188px',
  'bg-rainbow_188': 'object-position: -188px -752px',
  // 'bg-bg_icecream_corn_4': 'object-position: -476px -752px',
  // 'bg-bg_icecream_corn_3': 'object-position: -376px -752px',
  // 'bg-crown_1': 'object-position: -572px -752px',
  // 'bg-icon_rank_2': 'object-position: -612px -752px',
  // 'bg-icon_rank_1': 'object-position: -643px -752px',
  // 'bg-icon_rank_3': 'object-position: -674px -752px',
  // 'bg-icon_rank_4': 'object-position: -705px -752px',
  // 'bg-icon_title_1': 'object-position: -736px -752px',
  // 'bg-icon_title_2': 'object-position: -779px -752px',
};

const bestArr = Object.entries(best);
const productArr = Object.entries(product);

$bestImgs.forEach((img, idx) => {
  let [className, style] = bestArr[idx];
  img.classList.add(className);
  img.style = style;
});
$productImgs.forEach((img, idx) => {
  let [className, style] = productArr[idx];
  img.classList.add(className);
  img.style = style;
});
