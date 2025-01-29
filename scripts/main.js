$(".dropdown").hover(function () {
    $(this).children("ul").stop().delay(200).animate({height: "toggle", opacity: "toggle"}, 200);
  });


  document.querySelector('.burger').addEventListener('click', () =>{
    document.querySelector('.mobile-menu').classList.add('is-active');
    document.querySelector(".mobile-menu__close").addEventListener('click', () =>{
        document.querySelector('.mobile-menu').classList.remove('is-active');
    })
  })


document.querySelectorAll('.btn-request').forEach(function(item){
  item.addEventListener('click', () => {
    document.querySelector('.modal-bg').classList.add("modal__active");
    document.querySelector(".modal-request").classList.add("modal__active");
  })

document.querySelectorAll('.modal__close').forEach(function(item){
  item.addEventListener("click", () => {
    document.querySelector('.modal-bg').classList.remove("modal__active");
    document.querySelector(".modal-request").classList.remove("modal__active");
    document.querySelector(".modal__review").classList.remove("modal__active");
  })
})

document.querySelector('.leave-review').addEventListener('click', () =>{
  document.querySelector('.modal-bg').classList.add("modal__active");
  document.querySelector(".modal__review").classList.add("modal__active");
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
    pagination:{
      el: '.slider-pagination',
      type: 'fraction'
    }
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

const bodyElement = document.querySelector('body');
const darkTheme = document.querySelector('.theme-dark');
const lightTheme = document.querySelector('.theme-light');

lightTheme.addEventListener('click', () =>{
  bodyElement.classList.add('light-theme');
})

darkTheme.addEventListener('click', () =>{
  bodyElement.classList.remove('light-theme');
})