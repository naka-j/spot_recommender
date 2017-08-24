var GoogleMap;
var map;
$(function() {
    GoogleMap = {
        init: function() {
            map = new google.maps.Map($('#map')[0], {
                center: {
                    lat: MOUNTAIN_VIEW_LAT,
                    lng: MOUNTAIN_VIEW_LNG
                },
                zoom: DEFAULT_ZOOM_SIZE,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.BOTTOM_RIGHT
                }
            });
            this.setMarker();
        },
        setMarker: function() {
            var marker = new google.maps.Marker({
                map: map,
                position: {
                    lat: MOUNTAIN_VIEW_LAT,
                    lng: MOUNTAIN_VIEW_LNG
                },
                title: 'Hello World!'
            });
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
    GoogleMap.init();
});