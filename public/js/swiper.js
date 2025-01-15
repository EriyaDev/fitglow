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

  var swiper2 = new Swiper(".swiperReview", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletActiveClass: "my-custom-bullet-active",
      bulletClass: "my-custom-bullet",
    },
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