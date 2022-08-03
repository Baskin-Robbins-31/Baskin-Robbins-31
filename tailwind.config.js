module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {},
    extend: {
      screens: {
        'max-md': { max: '768px' },
      },
      fontFamily: {
        nanum: 'NanumSquareRound',
        baskin: 'BaskinRobbins',
      },
      backgroundImage: (theme) => ({
        'header-bg': "url('../images/bg_header.gif')",
        'icon-nav-search': "url('../images/icon_nav_search.png')",
        'icon-search': "url('../images/icon_search.png')",
        'icon-facebook': "url('../images/icon_facebook.png')",
        'icon-twitter': "url('../images/icon_twitter.png')",
        'icon-instagram': "url('../images/icon_instagram.png')",
        'icon-blog': "url('../images/icon_blog.png')",
        'icon-youtube': "url('../images/icon_youtube.png')",
        'icon-customer-center': "url('../images/icon_customer_center.png')",
        'btn-happypoint': "url('../images/btn_happypoint.png')",
        'btn-happymarket': "url('../images/btn_happymarket.png')",
        'btn-spc': "url('../images/btn_spc_story.png')",
        'btn-norton': "url('../images/btn_norton.gif')",
        'btn-ccm': "url('../images/btn_ccm_2.png')",
        'btn-ksa': "url('../images/btn_ksa.png')",
        'btn-hamburger': "url('../images/btn_hamburger.png')",
        'btn-close': "url('../images/btn_close.png')",
        'footer-logo': "url('../images/footer_logo.png')",
        'select-dropdown': "url('../images/select_dropdown.png')",
      }),
      colors: {
        pink1: '#FF7C98',
        pink2: '#E01883',
        navy1: '#224289',
        beige1: '#F9F8F7',
        brown1: '#918984',
        brown2: '#726454',
        white: '#FEFEFE',
        gray: '#CDCCD5',
        gray2: '#7E7E81',
        black1: '#2F231C',
        black2: '#321C15',
      },
    },
  },
  plugins: [],
};
