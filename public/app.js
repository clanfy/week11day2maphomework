var init = function(){
  var container = document.getElementById('main-map');
  var center = {lat: 51.5, lng: -0.127758};
  var otherMarker = {lat: 51.5, lng: -0.2};
  var mainMap = new MapWrapper(container, center, 10);
  mainMap.addMarker(center);
  mainMap.addMarker(otherMarker);

  mainMap.addClickEvent();

};

window.onload = init;