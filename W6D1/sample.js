$(document).ready(function() {

  var APIKey = '943747a4be35c84231bfaf208d0ac762';

  $('form').on('submit', function(event) {
    event.preventDefault();
    var userInput = $('input').val();
    $.get('https://api.openweathermap.org/data/2.5/weather?units=metric&q=' + userInput + '&appid=' + APIKey, function(data) {
      console.log(data);
    })
  })
})