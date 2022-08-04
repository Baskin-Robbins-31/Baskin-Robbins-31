(function () {
  'use strict';

  const get = (target) => {
    return document.querySelector(target);
  };

  let intervalFunc;
  class Carousel {
    constructor(carouselElement) {
      this.carouselElement = carouselElement;
      this.carousel = this.carouselElement.querySelector('.carousel-items');
      this.items = this.carouselElement.querySelectorAll('.carousel-item');

      this.totalItems = this.items.length;
      this.current = 0;
      this.isMoving = false;

      this.banner = get('.banner-top');
      this.width = this.banner.offsetWidth;
      this.fromBannerHeight = 138;
    }

    initCarousel() {
      this.isMoving = true;
      this.items[0].classList.add('active');
      this.moveCarouselAuto();
    }

    moveCarouselAuto() {
      if (!this.isMoving) return;

      intervalFunc = setInterval(() => {
        this.current++;

        if (this.current === this.totalItems) {
          this.current = 0;
        }
        this.moveCarouselTo();
      }, 3000);
    }

    disableInteraction() {
      clearInterval(intervalFunc);
    }

    setEventListener() {
      // scroll
      // window.addEventListener('scroll', () => {
      //   this.onScroll();
      // });
      // indicator
      this.indicators = this.carouselElement.querySelectorAll('.btn-indicator');

      for (let i = 0; i < this.indicators.length; i++) {
        this.indicators[i].addEventListener('click', () => {
          let carouselSlideTo = this.indicators[i].dataset.carouselSlideTo;

          this.current = Number(carouselSlideTo);
          this.moveCarouselTo();
        });
      }
      // prev, next button
      this.prevButton = this.carouselElement.querySelector('.previous');
      this.nextButton = this.carouselElement.querySelector('.next');

      this.prevButton.addEventListener('click', () => {
        this.movePrev();
      });
      this.nextButton.addEventListener('click', () => {
        this.moveNext();
      });
      // play button
      this.playButton = this.carouselElement.querySelector('.play');

      this.playButton.addEventListener('click', () => {
        this.changePlayButton();
      });
    }

    changeIndicatorColor() {
      this.activeIndicator = this.carouselElement.querySelector(
        '.btn-indicator[aria-selected="true"]',
      );
      `     `;
      this.activeIndicator.setAttribute('aria-selected', false);

      if (this.current < 0) {
        this.current = this.totalItems - 1;
      }

      if (this.current === this.totalItems) {
        this.current = 0;
      }

      this.selectedIndicator = this.indicators[this.current];
      this.selectedIndicator.setAttribute('aria-selected', true);
    }

    moveCarouselTo() {
      this.carousel.style.transition = 'transform 0.8s ease-in-out';
      this.carousel.style.transform =
        'translateX(' + -this.width * this.current + 'px)';
      this.changeIndicatorColor();
    }

    moveNext() {
      if (this.current === this.totalItems - 1) {
        this.current = 0;
      } else {
        this.current++;
      }

      this.moveCarouselTo();
    }

    movePrev() {
      if (this.current === 0) {
        this.current = this.totalItems - 1;
      } else {
        this.current--;
      }

      this.moveCarouselTo();
    }

    changePlayButton() {
      if (this.isMoving) {
        this.playButton.classList.remove('rotation');
        this.playButton.classList.add('pause');

        this.isMoving = false;
        this.disableInteraction();
      } else {
        this.playButton.classList.remove('pause');
        this.playButton.classList.add('rotation');

        this.isMoving = true;
        this.moveCarouselAuto();
      }
      // if (this.playButton.classList.contains('rotation')) {
      //   this.playButton.classList.remove('rotation');
      //   this.playButton.classList.add('pause');
      // } else if (this.playButton.classList.contains('pause')) {
      //   this.playButton.classList.remove('pause');
      //   this.playButton.classList.add('rotation');
      // }
    }

    changeCarouselAuto() {
      while (this.isMoving) {
        this.current++;
        if (this.current === this.totalItems) {
          this.current = 0;
        }
      }
    }

    // onScroll() {
    //   const bannerTopHeight = get('.banner-top').getBoundingClientRect().top;
    //   const fullScreen = get('.banner-top__imageWrapper--fullscreen');
    //   const { scrollTop, scrollHeight, clientHeight } =
    //     document.documentElement;

    //   if (bannerTopHeight <= 20) {
    //     fullScreen.style.animation = 'fadeInUp 2s';
    //     this.carouselElement.classList.remove('hidden');
    //     setTimeout(() => {
    //       fullScreen.classList.add('hidden');
    //     }, 2000);
    //   }
    // }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = get('.banner-carousel');
    const carousel = new Carousel(carouselElement);
    console.log(carousel);

    carousel.initCarousel();
    carousel.setEventListener();
  });
})();
