const mySwiper = new Swiper('.swiper-container', {
    slidesPerView : 4,
    spaceBetween : 35, 
    breakpoints: {      
        375: {
        slidesPerView: 1,  //브라우저가 425보다 클 때
        spaceBetween: 18,
      },
        576: {
        slidesPerView: 2,  //브라우저가 576보다 클 때
        spaceBetween: 20,
      },

        768: {
          slidesPerView: 2,  //브라우저가 768보다 클 때
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,  //브라우저가 1024보다 클 때
          spaceBetween: 50,
        },
      },

})