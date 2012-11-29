widgets.map = {
	render: function(selector,listing) {
		var centerPt = new google.maps.LatLng(listing.address.lat, listing.address.long);
		var myOptions = {
		    zoom: 18,
		    streetViewControl: true,
		    center: centerPt,
		    mapTypeId: google.maps.MapTypeId.SATELLITE
		};
		
		var map = new google.maps.Map($(selector)[0], myOptions);
		
		var marker = new google.maps.Marker({
		      position: centerPt,
		      map: map,
		      title:listing.address.line });
		
		 var boundary = new google.maps.Polygon({
		    paths: this.geoJsonPolygonToLatLngArray(listing.parcel_boundary),
		    strokeColor: "#FF0000",
		    strokeOpacity: 0.8,
		    strokeWeight: 2,
		    fillOpacity: 0.0
		  });
		
		  boundary.setMap(map);
	},
	geoJsonPolygonToLatLngArray: function(geoJsonPolygon) {
    	var coords = [];
    	for(var i = 0; i < geoJsonPolygon.coordinates[0].length; i++) {
    		coords.push(new google.maps.LatLng(geoJsonPolygon.coordinates[0][i][1],geoJsonPolygon.coordinates[0][i][0]));
    	}
		return coords;
    }
};
