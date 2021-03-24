var test = '';

const sendMessage = () => {
  test = $('textarea').val();
  if (test != '') {
    $('.chatbox').append('<div class="my-bubble bubble">' + test + '</div>');
    console.log(test);
    console.log('전송!');
    test = '';
    $('textarea').val('');
  }
};

$('#send').on('click', sendMessage);
