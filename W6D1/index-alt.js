$(document).ready(function() {
  function renderHoroscope(data) {
    $('.results').html('');
    $('<div class="result">')
      .append('<p class="horoscope__details">' + data.horoscope + '</p>')
    .appendTo('.results');
  }

  function getHoroscope(sign) {
    $.get('http://horoscope-lhl.herokuapp.com/horoscopes/' + sign, 
      function(response) {
        renderHoroscope(response);
      }
    );
  }
  
  $('.sign').on('click', function() {
    var elementSign = $(this).data('sign');
    getHoroscope(elementSign);
  })


});