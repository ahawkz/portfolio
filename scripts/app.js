
// jQuery onload
$(() => {

  // === EVENT HANDLERS === //
  //scroll between slides -- code help from attacomsian.com
  $('#main-nav').on('click', 'a[href^="#"]', function(event) {
    var targetHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(targetHref).offset().top
    }, 250);
    event.preventDefault();
  });

  //'see my work' button
  $('.slide-one-wrapper').on('click', 'a[href^="#"]', function(event) {
    var targetHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(targetHref).offset().top
    }, 300);
    event.preventDefault();
  });

  //nav bar
  $('.fa-bars').on('click', () => {
    //change display to be show
    $('#main-nav').toggle();
    $('.navbar-toggle').toggleClass('rotate');
  })

  // scroll to top button -- code help from getflywheel.com and templatemonster.com
  // const top = $('#top');
  //
  // $(window).scroll(function(){
  //   if ($(window).scrollTop() > 300) {
  //     top.addClass('top-page show');
  //   } else {
  //     top.removeClass('top-page show');
  //   }
  // });
  //
  // top.on('click', (event) => {
  //   event.preventDefault();
  //   $('html, body').animate({scrollTop:0}, '300');
  // });

}); //end onload
