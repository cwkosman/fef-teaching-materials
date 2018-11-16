$(document).ready(function() {
  function showResults(event) {
    event.preventDefault();
    $(this).slideUp();
    $('.results').slideDown();
  }

  $('form').on('submit', showResults);
});