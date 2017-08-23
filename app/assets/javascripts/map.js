var map;
$(function() {
    Map = {
        init: function() {
            map = new google.maps.Map($('#map')[0], {
                center: DEFAULT_LAT_LNG,
                zoom: DEFAULT_ZOOM_SIZE,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.BOTTOM_RIGHT
                }
            });
            Map.setMarker();
        },
        setMarker: function() {
            var marker = new google.maps.Marker({
                map: map,
                position: DEFAULT_LAT_LNG,
                title: 'Hello World!'
            });
        }
    };

    Map.init();
});
