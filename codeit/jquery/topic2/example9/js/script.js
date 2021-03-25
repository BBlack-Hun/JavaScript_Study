$('#popup-trigger').on('click', function () {
  $('#popup').fadeIn(1000);
});

$('#close-btn').on('click', function () {
  $('#popup').fadeOut(1000);
});

$(document).on('keydown', function (e) {
  if (e['key'] == 'Escape') $('#popup').fadeOut(1000);
});
