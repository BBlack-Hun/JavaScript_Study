$(document).ready(function () {
  $(window).on('scroll', function () {
    $('.playlist').animate({
      opacity: $(window).scrollTop() / $('playlist').height(),
    });
  });
});
