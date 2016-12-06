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
      map: this.googleMap,
      title: 'UVIC (Party Central)'
    });

    var infowindow = new google.maps.InfoWindow({
      content: information
    });

    marker.addListener('click', function(){
      infowindow.open(this.googleMap, marker);
    });
  },
  //binding .this, in this function to always be the map wrapper
  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = event.latLng;
      console.log(this);
      this.addMarker(position);
    }.bind(this));
  },
  createInfoWindow: function(){
    var infowindow = new google.maps.InfoWindow({
    content: "content string stuff" 
    });
  }

};