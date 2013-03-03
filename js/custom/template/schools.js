widgets.schools = {
	template:"\
<h2 class=\"h2 inline\">Schools for <span class=\"address-string\"></span></h2>\
	<div id=\"school-details\">\
<div id=\"school-tabs\">\
    <ul>\
    	<% for(var s = 0; s < school_groups.length; s++){ %>\
        	<li><a href=\"#<%= widgets.schools.toTabName(school_groups[s].name) %>\"><%= school_groups[s].name %></a></li>\
        <% } %>\
    </ul>\
	<% for(var s = 0; s < school_groups.length; s++){ %>\
	    <div id=\"<%= widgets.schools.toTabName(school_groups[s].name) %>\">\
	        <table class=\"school-table\">\
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
	        			<td><%= widgets.schools.getServesHtml(school.assigned) %></td>\
	        			<!--<td><button id=\"<%= widgets.schools.toSchoolButtonName(s,i) %>\"><%= school.name %></button>\</td>-->\
                        <td><%= school.name %></td>\
	        			<td><%= widgets.schools.toSchoolTypeLabel(school.type) %></td>\
	        			<td><%= widgets.schools.toGradeLevelLabel(school.level) %></td>\
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
	    		$( "#" + widgets.schools.toSchoolButtonName(s,i) ).button().click(function() {
	    			var ids = this.id.split("_");
	    			var school = school_groups[ids[1]].schools[ids[3]];

		        	var newDiv = $(document.createElement('div'));
					widgets.school.render(newDiv, school);
					newDiv.dialog(
						{
							modal: true,
							height: 600,
            				width: 500
							});
		    	});
	    	}
	    }
	},

	getServesHtml: function (serves) {
	    return (serves == true) ? "<span class=\"school-serves\">" : "--";
    },

	toSchoolTypeLabel: function (schoolType) {
	    return schoolType.toProperCase();
	},

	toGradeLevelLabel: function (gradeLevel) {
	    switch (gradeLevel) {
	        case "elementary_school":
	            return "Elementary";
	            break;
	        case "high_school":
	            return "Secondary";
	            break;
	        case "k_12":
	            return "K to 12";
	            break;
	    }
	},
	
	toSchoolButtonName: function(s, i) {
		return "schoolgroup_" + s + "_school_" + i;
	},
	
	toTabName: function(name) {
		return "sch-tab-" + name.toLowerCase().replace(/ /g,'-');
	}
};

