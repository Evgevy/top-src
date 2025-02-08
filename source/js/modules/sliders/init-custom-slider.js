const initCustomSlider = () => {
  const slider = document.querySelector('[data-slider="customer"]');

  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    // breakpoints: {

    //     300: {
    //         slidesPerView: 1,
    //         slidesPerGroup: 1,

    //         pagination: {
    //             el: ".swiper-pagination",
    //             type: "progressbar",

    //         },
    //     },
    //     767: {
    //         slidesPerView: 2,
    //         slidesPerGroup: 2,
    //     },

    //     1159: {
    //         slidesPerView: 3,
    //         slidesPerGroup: 3,
    //     },

    //     1440: {
    //         slidesPerView: 3,
    //         slidesPerGroup: 3,
    //     },
    // },
  });
};

export { initCustomSlider };
