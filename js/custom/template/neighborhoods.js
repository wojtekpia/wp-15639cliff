widgets.neighborhoods = {
	template:"\
<div>\
<h2 class=\"h2 inline\">Neighbourhood Info for <span class=\"address-string\"></span></h2>\
<h3>Average Values</h3>\
<table><tr>\
	<th>Location</th>\
	<th>List Price</th>\
	<th>$ / Sq. Ft.</th>\
	<th>Sale / List</th>\
</tr>\
<% for(var i = 0; i < neighborhoods.length; i++){ %>\
	<tr>\
		<td><%= neighborhoods[i].name %></td>\
		<td><%= neighborhoods[i].stats.fields.price.average.toMoney() %></td>\
		<td><%= neighborhoods[i].stats.fields.price_per_sqft.average.toMoney() %></td>\
		<td><%= neighborhoods[i].stats.fields.sale_to_list_ratio.average.toPercent(1) %></td>\
	</tr>\
<% } %>\
</table>\
<h3>Neighborhood Demographics</h3>\
<ul>\
<li><a href=\"<%= neighborhoods[0].demographics.href %>\">View <%= neighborhoods[0].name %> Demographics</a></li>\
<li>Walk Score: <a href=\"<%= neighborhoods[0].walk_score.href %>\"><%= neighborhoods[0].walk_score.score %></a></li>\
</ul>\
<h3>Value: $/Sq. Ft. in <%= neighborhoods[0].name %></h3>\
<img src=\"<%= neighborhoods[0].stats.fields.price_per_sqft.photo.href %>\"/>\
</div>\
",

	render: function(selector,neighborhoods) {
		var template = _.template(this.template);
		var html = template({'neighborhoods' : neighborhoods});
		$(selector).html(html);
	}
};

