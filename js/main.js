function initializeMap() {
    var mapOptions = {
        center: new google.maps.LatLng(52.3847296,4.8677805),
        zoom: 17
    };
    var map = new google.maps.Map(document.getElementById("gmaps"), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initializeMap);
