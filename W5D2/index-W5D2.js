var response = {
  "beers": [
    {
      "name": "Secret Handshake",
      "brewery": {
        "name": "Backcountry Brewing",
        "location": {
          "city": "Squamish",
          "province": "BC",
          "country": "CA"
        }
      },
      "style": "North East IPA",
      "hops": ["Vic Secret", "Rakau", "Waimea"],
      "abv": 6.7,
      "ibu": 50,
      "thumbnail": "https://pbs.twimg.com/media/DWHHVERWAAATw7f.jpg"
    },
    {
      "name": "Space Coyote",
      "brewery": {
        "name": "Counter Weight Brewing Company",
        "location": {
          "city": "Hamden",
          "province": "CT",
          "country": "USA"
        }
      },
      "style": "American IPA",
      "hops": ["Galaxy", "Mosaic"],
      "abv": 6.0,
      "ibu": 50,
      "thumbnail": "https://pbs.twimg.com/media/DKQ8JPAXcAEvFfD.jpg"
    }
  ]
}
  

function renderDrinks(response) {
  for (var i = 0; i < response.beers.length; i++) {
    $('<div class="result">')
      .append('<img class="drink__thumb" src="' + response.beers[i].thumbnail + '"/>')
      .append('<h3 class="drink__name">' + response.beers[i].name + '</h3>')
      .append('<p class="drink__body">' + response.beers[i].style + '</p>')
      .appendTo('.results');
  }
  $('form').hide();
  $('.results').show();
  $('#search-again').show();
}

$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    renderDrinks(response);
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
