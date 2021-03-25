function scrollHandler() {
  var o = $(window).scrollTop() + $(window).height();
  $('.playlist').each(function () {
    var t = $(this);
    t.position().top + t.outerHeight() / 2 < o &&
      t.animate({ opacity: '1' }, 1500);
  });
}
$(window).on('scroll', scrollHandler), scrollHandler();
