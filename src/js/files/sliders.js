import Swiper from "swiper";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function slider() {
  const introSliderBg = document.querySelector(".intro__slider-bg");
  const introSlider = document.querySelector(".intro__slider");

  if (introSlider) {
    const sliderBg = new Swiper(introSliderBg, {
      speed: 700,
      modules: [EffectFade],
      effect: "fade",
      simulateTouch: false,
      allowTouchMove: false,
    });

    const slider = new Swiper(introSlider, {
      speed: 700,
      modules: [Autoplay, EffectFade, Pagination, Navigation],
      effect: "fade",
      simulateTouch: false,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        prevEl: ".intro__slider-btn._prev",
        nextEl: ".intro__slider-btn._next",
      },
      pagination: {
        el: ".intro__slider-numbers",
        clickable: true,
        renderBullet: function (index, className) {
          const currentNumber = index + 1;
          return `
            <button class="btn-clear intro__number-btn ${className}">
              <span>${currentNumber > 9 ? currentNumber : "0" + currentNumber}</span>
              <div class="intro__number-line"></div>
            </button>
          `;
        },
      },
      on: {
        slideChange: ({ activeIndex }) => {
          sliderBg.slideTo(activeIndex);
        },
      },
    });
  }

  const articlesSlider = document.querySelector(".articles__slider");

  if (articlesSlider) {
    const slider = new Swiper(articlesSlider, {
      speed: 700,
      slidesPerView: "auto",
      modules: [Autoplay],
      spaceBetween: 20,
      grabCursor: true,
      autoplay: {
        delay: 3000,
      },
    });
  }

  const topSlider = document.querySelector(".top__slider");

  if (topSlider) {
    const slider = new Swiper(topSlider, {
      speed: 700,
      modules: [Autoplay],
      slidesPerView: "auto",
      spaceBetween: 20,
      grabCursor: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  const advantagesSlider = document.querySelector(".advantages__slider");

  if (advantagesSlider && window.matchMedia("(max-width:992px)").matches) {
    const slider = new Swiper(advantagesSlider, {
      speed: 700,
      modules: [Autoplay],
      slidesPerView: "auto",
      spaceBetween: 20,
      grabCursor: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  const obviousSlider = document.querySelector(".obvious__slider");

  if (obviousSlider) {
    const slider = new Swiper(obviousSlider, {
      speed: 700,
      modules: [Autoplay],
      slidesPerView: "auto",
      spaceBetween: 20,
      grabCursor: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        993: {
          spaceBetween: 60,
          slidesPerView: 2,
        },
        744: {
          spaceBetween: 40,
          slidesPerView: 2,
        },
      },
    });
  }
  const choiceSlider = document.querySelector(".choice__slider");

  if (choiceSlider && window.matchMedia("(max-width:992px)").matches) {
    const slider = new Swiper(choiceSlider, {
      speed: 700,
      modules: [Autoplay],
      slidesPerView: "auto",
      spaceBetween: 20,
      grabCursor: true,
      autoplay: {
        delay: 3000,
      },
    });
  }

  const volumesSlider = document.querySelector(".volumes__slider");

  if (volumesSlider) {
    const slider = new Swiper(volumesSlider, {
      speed: 700,
      modules: [Autoplay],
      slidesPerView: "auto",
      spaceBetween: 20,
      grabCursor: true,
      autoplay: {
        delay: 3500,
      },
      breakpoints: {
        993: {
          spaceBetween: 40,
        },
      },
    });
  }

  const modelsSlider = document.querySelector(".models__slider");

  if (modelsSlider && window.matchMedia("(max-width:992px)").matches) {
    const slider = new Swiper(modelsSlider, {
      speed: 700,
      modules: [Autoplay],
      slidesPerView: "auto",
      spaceBetween: 12,
      grabCursor: true,
      autoplay: {
        delay: 3500,
      },
      breakpoints: {
        744: {
          spaceBetween: 20,
        },
      },
    });
  }

  const introProductSlider = document.querySelector(".intro-product__slider");

  if (introProductSlider && window.matchMedia("(max-width:743px)").matches) {
    const slider = new Swiper(introProductSlider, {
      speed: 700,
      modules: [Autoplay, Pagination],
      grabCursor: true,
      autoplay: {
        delay: 3500,
      },
      pagination: {
        el: ".intro__slider-numbers",
        clickable: true,
        renderBullet: function (index, className) {
          const currentNumber = index + 1;
          return `
            <button class="btn-clear intro__number-btn ${className}">
              <span>${currentNumber > 9 ? currentNumber : "0" + currentNumber}</span>
              <div class="intro__number-line"></div>
            </button>
          `;
        },
      },
    });
  }

  const recSlider = document.querySelector(".rec__slider");

  if (recSlider) {
    const slides = recSlider.querySelectorAll(".swiper-slide");

    const slider = new Swiper(recSlider, {
      speed: 700,
      modules: [Autoplay],
      slidesPerView: "auto",
      spaceBetween: 12,
      grabCursor: true,
      autoplay: {
        delay: 3500,
      },
      breakpoints: {
        744: {
          spaceBetween: 20,
        },
      },
    });
  }

  const productSliders = document.querySelectorAll(".product__slider");

  if (productSliders.length) {
    productSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 700,
        modules: [Pagination],
        grabCursor: true,
        spaceBetween: 15,
        pagination: {
          el: slider.querySelector(".product__slider-pagination"),
          clickable: true,
        },
      });
    });
  }

  const compareSlider = document.querySelector(".compare__slider");

  if (compareSlider) {
    const swiper = new Swiper(compareSlider, {
      speed: 700,
      grabCursor: true,
      spaceBetween: 10,
      slidesPerView: "auto"
    });
  }
}