/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

/* Where in the world are you? */

var mapping = {};
mapping[0] = "wi wi-tornado";
mapping[1] = "wi wi-storm-showers";
mapping[2] = "wi wi-hurricane";
mapping[3] = "wi wi-thunderstorm";
mapping[4] = "wi wi-thunderstorm";
mapping[5] = "wi wi-rain-mix";
mapping[6] = "wi wi-sleet";
mapping[7] = "wi wi-sleet";
mapping[8] = "wi wi-raindrops";
mapping[9] = "wi wi-raindrops";
mapping[10] = "wi wi-rain";
mapping[11] = "wi wi-showers";
mapping[12] = "wi wi-showers";
mapping[13] = "wi wi-snow";
mapping[14] = "wi wi-snow";
mapping[15] = "wi wi-snow-wind";
mapping[16] = "wi wi-snow";
mapping[17] = "wi wi-hail";
mapping[18] = "wi wi-sleet";
mapping[19] = "wi wi-dust";
mapping[20] = "wi wi-fog";
mapping[21] = "wi wi-day-haze";
mapping[22] = "wi wi-smoke";
mapping[23] = "wi wi-strong-wind";
mapping[24] = "wi wi-windy";
mapping[25] = "wi wi-snowflake-cold";
mapping[26] = "wi wi-cloudy";
mapping[27] = "wi wi-night-alt-cloudy";
mapping[28] = "wi wi-day-cloudy";
mapping[29] = "wi wi-night-alt-partly-cloudy";
mapping[30] = "wi wi-day-sunny-overcast";
mapping[31] = "wi wi-night-clear";
mapping[32] = "wi wi-day-sunny";
mapping[33] = "wi wi-night-clear";
mapping[34] = "wi wi-day-sunny";
mapping[35] = "wi wi-hail";
mapping[36] = "wi wi-hot";
mapping[37] = "wi wi-thunderstorm";
mapping[38] = "wi wi-thunderstorm";
mapping[39] = "wi wi-thunderstorm";
mapping[40] = "wi wi-showers";
mapping[41] = "wi wi-snow";
mapping[42] = "wi wi-snow";
mapping[43] = "wi wi-snow";
mapping[44] = "wi wi-cloudy";
mapping[45] = "wi wi-thunderstorm";
mapping[46] = "wi wi-snow";
mapping[47] = "wi wi-storm-showers";
mapping[3200] = "wi wi-alien";
   
$(document).ready(function() {
  
$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="'+ mapping[weather.code]+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';  
      
      $("#weather").html(html);
      
      //$('.icon-23').addClass ('wi wi-strong-wind');
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}