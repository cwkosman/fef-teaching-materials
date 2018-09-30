var response = {
  "beers": [
    {
      "name": "Trailbreaker Pale Ale",
      "brewery": {
        "name": "Backcountry Brewing",
        "location": {
          "city": "Squamish",
          "province": "BC",
          "country": "CA"
        }
      },
      "style": "West Coast Pale Ale",
      "hops": ["Citra", "Simcoe", "Chinook"],
      "abv": 5.0,
      "ibu": 35,
      "thumbnail": "http://assets.vancouverisawesome.com/wp-content/uploads/2017/10/26141319/Backcountry-pale-ale.jpg"
    },
    {
      "name": "Space Coyote India Pale Ale",
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
      "thumbnail": "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/24177490_560619850948174_2924998626952347648_n.jpg"
    }
  ]
}

function printBeers(response) {
  for (var i = 0; i < response.beers.length; i++) {
    $('<div>')
      .append('<p class="beer-name">' + response.beers[i].name + '</p>')
      .append('<p class="beer-style">' + response.beers[i].style + '</p>')
      .appendTo('.results');
  }
}

$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    printBeers(response);
  })

  $('form input').on('focus blur', function() {
    $(this).toggleClass('focus');
  })
});