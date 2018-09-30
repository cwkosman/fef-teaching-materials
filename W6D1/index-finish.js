$(document).ready(function() {
  function renderDrinks(data) {
    data.drinks.forEach(function(drink) {
      $('<div class="result">')
      .append('<img class="drink__thumb" src="' + drink.strDrinkThumb + '"/>')
      .append('<p class="drink__name">' + drink.strDrink + '</p>')
      .append('<p class="drink__instructions">' + drink.strInstructions + '</p>')
      .appendTo('.results');
    })
  }

  function getDrinks(userInput) {
    $.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + userInput, function(data) {
      console.log(data);
    })
  }
  
  $('form').on('submit', function(event) {
    console.log($('#userInput').val());
    event.preventDefault();
    getDrinks($('#userInput').val());
  })

  $('form input').on('focus blur', function() {
    $(this).toggleClass('focus');
  })
});