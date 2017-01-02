var init = function(){
  var container = document.getElementById('main-map');
  var center = {lat: 48.46464113630569, lng: -123.30790758132935};
  var mainMap = new MapWrapper(container, center, 16);
  var vanButton = document.querySelector('#vanButton');

  var UVIC = "<b>Felicitas pub</b>, home of the greasiest pub on UVIC campus. Specialising in sticky floors, 80's linoleum decor, student servers that look like the poltergeist-seeing kid from The Sixth Sense, awful cheap beer in jugs and tacky dress-up charity parties. Cookie used to hang out here with her best friends and even won $30, a pint glass and a shoe horn from coming in Second Place in a pub quiz! <i> Fun fact: </i> Cookie has barfed in the bathrooms more times than she can count. " ;

  mainMap.createInfoWindow(center, UVIC);
  mainMap.addClickEvent();

// var vanCoords = {lat:49.2827 , lng: -123.1207};

var vanCity = "Vancouver, also known as No Fun-Couver due to it's night-life. Otherwise an incredibly beautiful city.";

var goToVancouver = function(){
  console.log("button clicked");
  var vanCoords = {lat: 49.2827, lng: -123.1207};
  mainMap.googleMap.setCenter(vanCoords);
  mainMap.createInfoWindow(vanCoords, vanCity);
};

vanButton.onclick = goToVancouver;



};



window.onload = init;