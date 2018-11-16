$(document).ready(function() {
  
  // Define functions
  function showResults(event) {
    event.preventDefault();
    getDrinks($('#user-input').val());
  }

  function resetSearch() {
    $('.results').html('');
    $(this).hide();
    $('form').show();
  }

  function renderDrinks(response) {
    for (var i = 0; i < response.drinks.length; i++) {
      $('<div class="result">')
        .append('<img class="drink__thumb" src="' + response.drinks[i].strDrinkThumb + '"/>')
        .append('<h3 class="drink__name">' + response.drinks[i].strDrink + '</h3>')
        .append('<p class="drink__body">' + response.drinks[i].strInstructions + '</p>')
        .appendTo('.results');
    }
    $('form').hide();
    $('.results').show();
    $('#search-again').show();
  }

  function getDrinks(userInput) {
    $.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + userInput, function(data) {
      renderDrinks(data);
    })
  }

  // Bind event handlers
  $('form').on('submit', showResults);
  $('#search-again').on('click', resetSearch);
});
