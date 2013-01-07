widgets.school = {
	template:"\
<div>\
		<table>\
            <tr><th><%= school.name %></th></tr>\
            <tr><td><%= school.type %> <%= school.level %></td></tr>\
            <tr><td><%= school.address.line %></td></tr>\
            <tr><td><%= school.address.city %> <%= school.address.state_code %> <%= school.address.postal_code %></td></tr>\
            <tr><td><%= school.address.phone_number %></td></tr>\
        </table>\
        <table>\
        	<tr><th>Report Card</th></tr>\
			<% for(var year in school.rank.by.year){ %>\
            <tr><td><%= year %> Rank: <%= school.rank.by.year[year] %></td></tr>\
            <% } %>\
            <tr><td>Average Rank: <%= school.rank.average %></td></tr>\
            <tr><td>FI Rating: <%= school.rating.fraser_institute.score %></td></tr>\
        </table>\
        <table>\
        	<tr><th>School Information</th></tr>\
			<% for(var i = 0; i < school.general_info.length; i++){ %>\
            <tr><td><%= school.general_info[i].name %>: <%= school.general_info[i].value %></td></tr>\
            <% } %>\
        </table>\
        <table>\
  /*TODO: get from data*/      	<% var years=[2007,2008,2009,2010,2011] %>\
            <tr>\
                <th>Academic Performance</th>\
                <% for(var i = 0; i < years.length; i++){ %>\
                	<th><%= years[i] %></th>\
                <% } %>\
            </tr>\
            <% for(var k = 0; k < school.academic_performance.length; k++){ %>\
            	<tr>\
            	<td><%= school.academic_performance[k].name %></td>\
            	<% for(var i = 0; i < years.length; i++){ %>\
                	<td>\
                	<% if(school.academic_performance[k].by.year[years[i]]) { %>\
                		<%= school.academic_performance[k].by.year[years[i]] %>\
					<% } %>\
                	</td>\
                <% } %>\
            	</tr>\
            <% } %>\
	</table>\
</div>\
",

	render: function(schoolDiv, school) {
		var template = _.template(this.template);
		var html = template({'school' : school});
		schoolDiv.html(html);
		schoolDiv.attr('title', 'School details for ' + school.name)
	}
};

