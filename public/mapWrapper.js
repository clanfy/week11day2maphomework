var MapWrapper = function(container, center, zoom){

this.googleMap = new google.maps.Map(container, 
{ center: center,
  zoom: zoom }
);
};

MapWrapper.prototype = {

  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords, 
      map: this.googleMap
    });
  },
  //binding .this, in this function to always be the map wrapper
  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      console.log("Yo I got called");
      console.log(event);
      console.log(event.latLng.lat());  
      console.log(event.latLng.lng());
      // var position = {lat: event.latLng.lat(), lng: event.latLng.lng()};
      var position = event.latLng;
      console.log(this);
      this.addMarker(position);
    }.bind(this));
  }

};