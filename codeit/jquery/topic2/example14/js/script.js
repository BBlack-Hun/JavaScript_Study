function scrollHandlert() {
  var winddowBottom = $(window).scrollTop() + $(window).height();
  console.log(winddowBottom);

  // 모든 플레이 리스트를 하나씩 살펴보고
  // 그 playlist의 중간 지점의 좌표가 windowBottom 보다 작으면
  // 그 playlist를 보이게 해라!
  var playlists = $('.playlist');
  for (let i = 0; i < playlists.length; i++) {
    var playlist = $(playlists[i]);
    var playlistHalf = playlist.position().top + playlist.outerHeight() / 2;
    if (playlistHalf < winddowBottom) {
      playlist.animate({ opacity: '1' }, 1500);
    }
  }
}

$(window).on('scroll', scrollHandlert), scrollHandlert();
