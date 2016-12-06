var init = function(){
  var container = document.getElementById('main-map');
  var center = {lat: 48.46464113630569, lng: -123.30790758132935};

  var mainMap = new MapWrapper(container, center, 16);
  mainMap.addMarker(center);


  mainMap.addClickEvent();

};

window.onload = init;