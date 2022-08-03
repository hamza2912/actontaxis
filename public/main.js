$(document).ready((function(){

  AOS.init();

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 1,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
  });
  
  $('#show-mobile-nav').on('click', function (e) {
      $('#mobile-nav').slideToggle();
      $('#mobile-nav').css("display", "flex");
  });

}));