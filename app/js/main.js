$("input").change(function(){
    $(this).siblings("input").prop('checked', false);
 });
 
 $("form").submit(function(){
     if($("input:checked").length > 1){
        alert('error!');
        return false;
     } 
 });


$(document).ready(function() {

	$('.reviews__list').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 3000,
        variableWidth: true,
        autoplay: true
      });

      $('.slider__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 3000,
        variableWidth: true,
        autoplay: true
      });

      $('.slider__item').removeAttr('style');

});

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('animate__fadeInLeft');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.animate__left');
  for (let elm of elements) {
    observer.observe(elm);
  }

  function onEntryR(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('animate__fadeInRight');
      }
    });
  }
  let optionsR = { threshold: [0.5] };
  let observerR = new IntersectionObserver(onEntryR, optionsR);
  let elementsR = document.querySelectorAll('.animate__right');
  for (let elm of elementsR) {
    observerR.observe(elm);
  }

  let popup = document.querySelector('.application'); // Само окно
  let openPopupButtons = document.querySelectorAll('.btn-auth'); // Кнопки для показа окна
  let closePopupButton = document.querySelector('.application__close'); // Кнопка для скрытия окна

  openPopupButtons.forEach((a) => { // Перебираем все кнопки
    a.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popup.classList.add('application__active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popup.classList.remove('application__active'); // И с окна
});

