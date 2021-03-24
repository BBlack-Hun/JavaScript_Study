var downBlue = () => {
  $('.flag.blue').addClass('down');
  $('.flag.white').removeClass('down');
  console.log('청기 내려');
  setTimeout(function () {
    $('.flag.blue').removeClass('down');
  }, 1000);
};

var downWhite = () => {
  $('.flag.white').addClass('down');
  $('.flag.blue').removeClass('down');
  console.log('청기 내리지 말고 백기 내려');
  setTimeout(function () {
    $('.flag.white').removeClass('down');
  }, 1000);
};

var downBlueDot = () => {
  $('.flag.blue').removeClass('down');
  $('.flag.blue.dot').addClass('down');
  console.log('점선 청기 내려');
  setTimeout(() => {
    $('.flag.blue.dot').removeClass('down');
  }, 1000);
};
$('#btn1').on('click', downBlue);

$('#btn2').on('click', downWhite);

$('#btn3').on('click', downBlueDot);
