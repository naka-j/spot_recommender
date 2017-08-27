var GoogleMap;
var map;

    GoogleMap = {
        init: function() {
            map = new google.maps.Map($('#map')[0], {
                center: {
                    lat: DEFAULT_VIEW_LAT,
                    lng: DEFAULT_VIEW_LNG
                },
                zoom: DEFAULT_ZOOM_SIZE,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.BOTTOM_RIGHT
                }
            });
            SpotController.loadSpots(GoogleMap.loadSpotsSuccess, GoogleMap.loadSpotsError);

        },
        setMarker: function(lat, lng) {
            var marker = new google.maps.Marker({
                map: map,
                position: {
                    lat: lat,
                    lng: lng
                },
                animation: google.maps.Animation.DROP,
                title: 'Hello World!'
            });
            // marker.addListener('click', )
        },
        loadSpotsSuccess: function(data, status, jqXHR) {
            console.log(data)
            if (data) {
                data.forEach(function(d) {
                    GoogleMap.setMarker(d.latitude, d.longitude);
                });
            }
        },
        loadSpotsError: function(jqXHR, status, error) {
            alart('Error!')
        },

        search: function(query) {
            var params = {
                query: query,
                key: GOOGLE_PLACE_API_KEY
            };
            var placeSearch = new google.maps.places.PlacesService(map);
            placeSearch.textSearch(params, this.placeSearchCallback);
        },
        placeSearchCallback: function(result, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                GoogleMap.searchSuccess(result)
            } else {
                GoogleMap.searchError(result)
            }
        },
        searchSuccess: function(result) {
            var newSpot = {lat: result[0].geometry.location.lat(), lng: result[0].geometry.location.lng()};
            map.setCenter(newSpot);
        },
        searchError: function(data) {
            console.log(data);
        }
    };


function initMap() {
    GoogleMap.init()
}