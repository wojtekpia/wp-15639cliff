widgets.schools = {
	template:"\
<h2 id=\"details-header\" class=\"h2 inline\">Schools for <span class=\"address-string\"></span></h2>\
	<div id=\"school-details\">\
	<% for(var s = 0; s < schools.length; s++){ %>\
		<h3><%= schools[s].name %></h3>\
		<div>\
		<table>\
            <tr><th><%= schools[s].name %></th></tr>\
            <tr><td><%= schools[s].type %> <%= schools[s].level %></td></tr>\
            <tr><td><%= schools[s].address.line %></td></tr>\
            <tr><td><%= schools[s].address.city %> <%= schools[s].address.state_code %> <%= schools[s].address.postal_code %></td></tr>\
            <tr><td><%= schools[s].address.phone_number %></td></tr>\
        </table>\
        <table>\
        	<tr><th>Report Card</th></tr>\
			<% for(var year in schools[s].rank.by.year){ %>\
            <tr><td><%= year %> Rank: <%= schools[s].rank.by.year[year] %></td></tr>\
            <% } %>\
            <tr><td>Average Rank: <%= schools[s].rank.average %></td></tr>\
            <tr><td>FI Rating: <%= schools[s].rating.fraser_institute.score %></td></tr>\
        </table>\
        <table>\
        	<tr><th>School Information</th></tr>\
			<% for(var i = 0; i < schools[s].general_info.length; i++){ %>\
            <tr><td><%= schools[s].general_info[i].name %>: <%= schools[s].general_info[i].value %></td></tr>\
            <% } %>\
        </table>\
        <table>\
        	<% var years=[2007,2008,2009,2010,2011] %>\
            <tr>\
                <th>Academic Performance</th>\
                <% for(var i = 0; i < years.length; i++){ %>\
                	<th><%= years[i] %></th>\
                <% } %>\
            </tr>\
            <% for(var k = 0; k < schools[s].academic_performance.length; k++){ %>\
            	<tr>\
            	<td><%= schools[s].academic_performance[k].name %></td>\
            	<% for(var i = 0; i < years.length; i++){ %>\
                	<td>\
                	<% if(schools[s].academic_performance[k].by.year[years[i]]) { %>\
                		<%= schools[s].academic_performance[k].by.year[years[i]] %>\
					<% } %>\
                	</td>\
                <% } %>\
            	</tr>\
            <% } %>\
        </table>\
        </div>\
	<% } %>\
	</div>\
",

	render: function(selector,schools) {
		var template = _.template(this.template);
		var html = template({'schools' : schools});
		$(selector).html(html);
		
		$("#school-details").accordion({
					heightStyle : "content",
					collapsible: true
				});
	}
};

