$('#btn1').on('click', function () {
  $('.flag.blue').addClass('down');
  $('.flag.white').removeClass('down');
  console.log('청기 내려');
});

$('#btn2').on('click', function () {
  $('.flag.white').addClass('down');
  $('.flag.blue').removeClass('down');
  console.log('청기 내리지 말고 백기 내려');
});

$('#btn3').on('click', function () {
  $('.flag.blue').removeClass('down');
  $('.flag.blue.dot').addClass('down');
  console.log('점선 청기 내려');
});
