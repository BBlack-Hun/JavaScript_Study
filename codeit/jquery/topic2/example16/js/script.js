function scrollHandler() {
  var scrollBottom = $(window).scrollTop() + $(window).height();

  if ($('.header').height() * 2 < scrollBottom) {
    $('.menu-right li button').css('color', '#4a4a4a');
  } else if ($('.header').height() > $(window).scrollTop()) {
    $('.menu-right li button').css('color', 'white');
  }
}

$(window).on('scroll', scrollHandler);
scrollHandler();

$('#about-btn').on('click', function () {
  var about_scroll = $('.about').offset().top;
  $('html, body').animate({ scrollTop: about_scroll }, 1000);
});

$('#contact-btn').on('click', function () {
  var contact_scroll = $('.contact').offset().top;
  $('html, body').animate({ scrollTop: contact_scroll }, 1000);
});
