$(".dropdown").hover(function () {
    $(this).children("ul").stop().delay(200).animate({height: "toggle", opacity: "toggle"}, 200);
  });


  document.querySelector('.burger').addEventListener('click', () =>{
    document.querySelector('.mobile-menu').classList.add('is-active');
    document.querySelector(".mobile-menu__close").addEventListener('click', () =>{
        document.querySelector('.mobile-menu').classList.remove('is-active');
    })
  })

  new Swiper(".cases__slider",{
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev',
    },
    speed: 400,
    slidesPerView: 1,
    effect: 'slide',
    spaceBetween: 60,
    // autoplay: true,
    centerInsufficientSlides: true,
    centeredSlides: true,
    loop: true,
  });

  new Swiper(".reviews__slider",{
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev',
    },
    speed: 400,
    effect: 'slide',
    spaceBetween: 60,
    // autoplay: true,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      1023.98: {
        slidesPerView: 2,
        spaceBetween: 60
      },
      320: {
        slidesPerView: 1,
      },
     
    }
  });
 