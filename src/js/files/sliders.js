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
          spaceBetween: 40
        }
      }
    });
  }
}
