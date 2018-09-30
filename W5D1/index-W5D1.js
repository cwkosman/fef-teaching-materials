$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $(this).slideUp();
    $('.results').slideDown();
  })

  $('form input').on('focus blur', function() {
    $(this).toggleClass('focus');
  })
});