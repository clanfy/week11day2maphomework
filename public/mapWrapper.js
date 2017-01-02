var MapWrapper = function(container, center, zoom){

this.googleMap = new google.maps.Map(container, 
{ center: center,
  zoom: zoom }
);
};

MapWrapper.prototype = {

  addMarker: function(coords, information){
    var marker = new google.maps.Marker({
      position: coords, 
      map: this.googleMap
    });
    return marker;
  },
  //binding .this, in this function to always be the map wrapper
  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = event.latLng;
      console.log(this);
      this.addMarker(position);
    }.bind(this));
  },
  createInfoWindow: function(coords, information){
    var marker = this.addMarker(coords);
    marker.addListener('click', function(){
      var infoWindow = new google.maps.InfoWindow({
        content: information
      });
      infoWindow.open(this.googleMap, marker);
    });
  }

};