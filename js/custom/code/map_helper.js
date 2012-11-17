var map_helper = {
    geoJsonPolygonToLatLngArray: function(geoJsonPolygon) {
    	var coords = [];
    	for(var i = 0; i < geoJsonPolygon.coordinates[0].length; i++) {
    		coords.push(new google.maps.LatLng(geoJsonPolygon.coordinates[0][i][1],geoJsonPolygon.coordinates[0][i][0]));
    	}
		return coords;
    },
};
