// onload
$(() => {

  // event handlers
  //scroll between slides -- code help from attacomsian.com
  $('#main-nav').on('click', 'a[href^="#"]', function(event) {
    var targetHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(targetHref).offset().top
    }, 250);
    event.preventDefault();
  });

  //see my work button
  $('.slide-one-wrapper').on('click', 'a[href^="#"]', function(event) {
    var targetHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(targetHref).offset().top
    }, 300);
    event.preventDefault();
  });


}); //end onload
