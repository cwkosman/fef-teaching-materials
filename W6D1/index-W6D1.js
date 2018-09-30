function getDrinks(userInput) {
  $.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + userInput, function(data) {
    renderDrinks(data);
    $('form').hide();
    $('.results').show();
    $('#search-again').show();
  })
}

function renderDrinks(data) {
  data.drinks.forEach(function(drink) {
    $('<div class="result">')
      .append('<img class="drink__thumb" src="' + drink.strDrinkThumb + '"/>')
      .append('<h3 class="drink__name">' + drink.strDrink + '</h3>')
      .append('<p class="drink__body">' + drink.strInstructions + '</p>')
      .appendTo('.results');
  });
}

$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    getDrinks($('#user-input').val());
  })

  $('form input').on('focus blur', function() {
    $(this).toggleClass('focus');
  })

  $('#search-again').on('click', function() {
    $('.results').html('');
    $(this).hide();
    $('form').show();
  })
});
