// onload
$(() => {

  // event handlers
  $('#main-nav').on('click', 'a[href^="#"]', function(event) {
    var targetHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(targetHref).offset().top
    }, 250);
    event.preventDefault();
  });


}); //end onload
