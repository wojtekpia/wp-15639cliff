widgets.schools2 = {
	template:"\
<h2 class=\"h2 inline\">Schools for <span class=\"address-string\"></span></h2>\
	<div id=\"school-details\">\
<div id=\"school-tabs\">\
    <ul>\
    	<% for(var s = 0; s < school_groups.length; s++){ %>\
        	<li><a href=\"#<%= widgets.schools2.toTabName(school_groups[s].name) %>\"><%= school_groups[s].name %></a></li>\
        <% } %>\
    </ul>\
	<% for(var s = 0; s < school_groups.length; s++){ %>\
	    <div id=\"<%= widgets.schools2.toTabName(school_groups[s].name) %>\">\
	        <table>\
	        	<tr>\
	        		<th class=\"sch-serves-col\">Serves Home</th>\
	        		<th class=\"sch-name-col\">School Name</th>\
	        		<th class=\"sch-type-col\">Type</th>\
	        		<th class=\"sch-grade-col\">Grades</th>\
	        		<th class=\"sch-rating-col\">Rating</th>\
	        		<th class=\"sch-distance-col\">Distance</th>\
	        	</tr>\
	        	<% for(var i = 0; i < school_groups[s].schools.length; i++){\
	        		var school = school_groups[s].schools[i] %>\
	        		<tr>\
	        			<td><%= school.assigned %></td>\
	        			<td><button id=\"<%= widgets.schools2.toSchoolButtonName(s,i) %>\"><%= school.name %></button>\</td>\
	        			<td><%= school.type %></td>\
	        			<td><%= school.level %></td>\
	        			<td><%= school.rating.fraser_institute.score %></td>\
	        			<td><%= geo.distance(school.address.lat, school.address.long, listing.address.lat, listing.address.long).toFixed(2) %> km</td>\
	        		</tr>\
	        	<% } %>\
	        </table>\
	    </div>\
    <% } %>\
</div>\
	</div>\
",

	render: function(selector,school_groups) {
		var template = _.template(this.template);
		var html = template({'school_groups' : school_groups, 'listing' : listing});
		$(selector).html(html);
		
		$(function() {
	        $( "#school-tabs" ).tabs();
	    });
	    
	    for(var s = 0; s < school_groups.length; s++){
	    	for(var i = 0; i < school_groups[s].schools.length; i++){
	    		$( "#" + widgets.schools2.toSchoolButtonName(s,i) ).button().click(function() {
	    			var ids = this.id.split("_");
	    			var school = school_groups[ids[1]].schools[ids[3]];
		        	alert(school.name);
		        	// TODO: create a new div as dialog with appropriate content, then open.
		    	});
	    	}
	    }
	},
	
	toSchoolButtonName: function(s, i) {
		return "schoolgroup_" + s + "_school_" + i;
	},
	
	toTabName: function(name) {
		return "sch-tab-" + name.toLowerCase().replace(/ /g,'-');
	}
};

