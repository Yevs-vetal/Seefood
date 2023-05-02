$(function(){

$('.head-slider').slick({//добавляю слайдер
vertical: true, //чтоб слайдер был не горизонт., а вертикал.
dots: true, //добавляем цифры
prevArrow: '<button type="button" class="slick-prev"><img src="images/prew.svg" alt=""></button>',//создаю верхнюю стрелку и вставляю картинку со стрелкой
nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>', //создаю нижнюю стрелку и вставляю картинку со стрелкой


// адаптив
responsive: [
  {
    breakpoint: 361, //ширина экрана
    settings: {
      dots: false,
      arrows: false,
      autoplay: 3000, //через 2 секунды переходит на следующую картинку
    }
  }
]

});

$('.crab__name').slick({
    vertical: true, //чтоб слайдер был не горизонт., а вертикал.
    slidesToShow: 5, //количестов имен которые нужно показывать в слайдере
    slidesToScroll: 1,// количество имен которые будут скролится при нажатии
    // fade: true,
    asNavFor: '.crab__slider-product', // с каким слайдером связать 1 со вторым
    focusOnSelect: true, //при нажатии на любое имя он сразу переключал описание
    prevArrow: '<button type="button" class="crab-prev"><img src="images/crab-prew.svg" alt=""></button>',//создаю верхнюю стрелку и вставляю картинку со стрелкой
    nextArrow: '<button type="button" class="crab-next"><img src="images/crab-next.svg" alt=""></button>', //создаю нижнюю стрелку и вставляю картинку со стрелкой
    //centerMode: true, //чтоб выбранный краб был по центру
    // autoplay: 3000, //через 3 секунды переходит на следующую картинку

    // адаптив
    responsive: [
      {
        breakpoint: 891, //ширина экрана
        settings: {
          vertical: false, //чтоб слайдер был не вертикал., а горизонт.
          slidesToShow: 3, //количестов имен которые нужно показывать в слайдере
          arrows: false,
          centerMode: true,
          dots: true
        },
        breakpoint: 461, //ширина экрана
        settings: {
          vertical: false, //чтоб слайдер был не вертикал., а горизонт.
          slidesToShow: 1, //количестов имен которые нужно показывать в слайдере
          arrows: false,
          dots: true
        }
      } 
    ]

  });
  $('.crab__slider-product').slick({
    vertical: true, //чтоб слайдер был не горизонт., а вертикал.
    slidesToShow: 1,// чтоб показывалось описание только одного
    slidesToScroll: 1,// количество описаний которые будут скролиться
    asNavFor: '.crab__name',//связываю со слайдером
    // fade: true, //способ анимации
    arrows: false, //убираем стандартные стрелки
    // autoplay: 3000 //через 3 секунды переходит на следующую картинку
  });

   $('.menu-btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
   }); 

});