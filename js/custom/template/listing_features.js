widgets.listing_features = {
	template:"\
<div>\
<h2 id=\"details-header\" class=\"h2 inline\">Property Details for <span class=\"address-string\"></span></h2>\
<div id=\"listing_features_columns\">\
<% for(var i = 0; i < listing.features.length; i++){ %>\
	<table><tr><th><%= listing.features[i].category %></th></tr></table>\
	<table><tr><td>\
	<% for(var j = 0; j < listing.features[i].features.length; j++){ %>\
		<b><%= listing.features[i].features[j].title %></b>\
		<ul>\
		<% for(var k = 0; k < listing.features[i].features[j].features.length; k++){ %>\
			<li><%= listing.features[i].features[j].features[k] %></li>\
		<% } %>\
		</ul>\
	<% } %>\
	</td></tr></table>\
<% } %>\
</div>\
</div>\
",

	render: function(selector,listing) {
		var template = _.template(this.template);
		var html = template({'listing' : listing});
		$(selector).html(html);
		
		$('#listing_features_columns').columnize({width:400});
	}
};
