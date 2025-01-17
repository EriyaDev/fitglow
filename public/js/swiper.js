var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletActiveClass: "my-custom-bullet-active",
      bulletClass: "my-custom-bullet",
    },
  });

var trainerSwiper = new Swiper(".trainerSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletActiveClass: "my-custom-bullet-active",
      bulletClass: "my-custom-bullet",
    },
  });

  var swiper2 = new Swiper(".swiperPricing2", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiperReview = new Swiper(".swiperReview", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletActiveClass: "swiper-pagination-bullet-active",
      bulletClass: "swiper-pagination-bullet",
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
    },
  });

  var swiperPricing = new Swiper(".swiperPricing", {
    effect: "cards",
    grabCursor: true,
  });

  setInterval(() => {
    var screenWidth = window.innerWidth;
    console.log(screenWidth);
    const featuredSwiper = document.getElementById("featuredSwiper");

    if (screenWidth >= 1024) {
      swiper.passedParams.slidesPerView;
      console.log(swiper.passedParams.slidesPerView);

      swiper.params.slidesPerView = 4;
      console.log(swiper.params.slidesPerView);
      swiper.update();
    }
    else if(screenWidth >= 768){
      swiper.params.slidesPerView = 3;
      console.log(swiper.params.slidesPerView);
      swiper.update();
    }else {
      swiper.params.slidesPerView = 2;
      console.log(swiper.params.slidesPerView);
      swiper.update();
    }
  }, 1000);
