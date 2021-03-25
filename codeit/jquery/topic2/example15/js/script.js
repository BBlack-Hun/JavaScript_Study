function scrollHandlert() {
  var winddowBottom = $(window).scrollTop() + $(window).height();
  console.log(winddowBottom, '---------', $(document).height());
  // console.log();

  // 모든 플레이 리스트를 하나씩 살펴보고
  // 그 playlist의 중간 지점의 좌표가 windowBottom 보다 작으면
  // 그 playlist를 보이게 해라!
  $('.playlist').each(function () {
    var playlisthalf = $(this).position().top - $(this).outerHeight();
    if (playlisthalf < winddowBottom) {
      $(this).animate({ opacity: '1' }, 1500);
    }
    if ($(document).height() == winddowBottom) {
      $('.to-top-btn').fadeIn();
    } else {
      $('.to-top-btn').fadeOut();
    }
  });
}

$(window).on('scroll', scrollHandlert), scrollHandlert();
$(window).on('scroll', function () {});
