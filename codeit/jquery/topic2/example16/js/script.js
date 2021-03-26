function scrollHandler() {
  var about_scroll = $('.about').offset().top;

  if ($(window).scrollTop() >= about_scroll) {
    $('.menu-right li button').css('color', '#4a4a4a');
  } else {
    $('.menu-right li button').css('color', 'white');
  }
}

$(window).on('scroll', scrollHandler);

scrollHandler();
var about_scroll = $('.about').offset().top;
var contact_scroll = $('.contact').offset().top;
$('#about-btn').on('click', function () {
  var about_scroll = $('.about').offset().top;
  $('html, body').animate({ scrollTop: about_scroll }, 1000);
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= about_scroll) {
      $('.about .vertical-center').animate({ opacity: 1, top: 0 }, 1000);
    }
  });
});
$(window).on('scroll', function () {
  if ($(window).scrollTop() >= about_scroll) {
    $('.about .vertical-center').animate({ opacity: 1, top: 0 }, 1000);
    $('.bar .inner-bar').each(function () {
      var perc = $(this.nextElementSibling).text();
      $(this).animate({ width: perc }, 500);
    });
  }
});

$('#contact-btn').on('click', function () {
  var contact_scroll = $('.contact').offset().top;
  $('html, body').animate({ scrollTop: contact_scroll }, 1000);

  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= contact_scroll) {
      $('.contact .vertical-center').animate({ opacity: 1, top: 0 }, 1000);
    }
  });
});

$(window).on('scroll', function () {
  if ($(window).scrollTop() >= contact_scroll) {
    $('.contact .vertical-center').animate({ opacity: 1, top: 0 }, 1000);
  }
});
