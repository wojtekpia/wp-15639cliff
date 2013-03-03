widgets.neighborhoods = {
	template:"\
<h2 class=\"h2 inline\">Neighbourhood Info for <span class=\"address-string\"></span></h2>\
<div class=\"page-width\">\
 <div class=\"contributor_details link_button\">\
<img src=\"http://www.whiterockcity.ca/images/logo-white-rock.png\"/>\
<ul>\
<li><a href=\"<%= neighborhoods[0].demographics.href %>\"><%= neighborhoods[0].name %> Demographics</a></li>\
<li>Walk Score: <a href=\"<%= neighborhoods[0].walk_score.href %>\"><%= neighborhoods[0].walk_score.score %></a></li>\
</ul>\
<ul>\
<% for(var i = 0; i < neighborhoods[1].links.length; i++){ %>\
    <li><a href=\"<%= neighborhoods[1].links[i].href %>\"><%= neighborhoods[1].name %> <%= neighborhoods[1].links[i].label %></a></li>\
<% } %>\
</ul>\
 </div>\
 <div class=\"contributor_text\">\
<p>With a population of 18,250, White Rock is located in the southwest corner of the Lower Mainland, forty-five kilometres from Vancouver and only five minutes to the Canada/US border. We are an exciting seaside community clustered around an eight kilometre sandy beach and the warm shallow waters of Semiahmoo Bay.</p>\
<p>Because of our moderate climate, White Rock is a preferred retirement spot. Average summer temperature is twenty-three degrees Celsius while the winter average temperature is Six degrees Celsius.</p>\
<p>The waterfront includes a promenade that is two and a half kilometres, fully accessible to the disabled and parents with strollers. The heritage pier, train station, large beached \"white rock\" and colourful sidewalk cafes create a special ambience throughout the area.</p>\
<p>Commercial meets residential along the waterfront as well as in the Town Centre where you will find a number of apartment buildings with retail stores on the ground level. A variety of specialty shops dot White Rock.</p>\
<p>From single-family homes on small lots, to estate lots and multiple family homes, White Rock has a wide selection of housing. Ocean views from some sites are breathtaking.</p>\
<p>Commuting to Vancouver takes about one hour. Dedicated bus and high-occupancy vehicle lanes make public transportation and car or vanpooling appealing.</p>\
<p>Recreation facilities and programs are excellent. Some include the Promenade and Centennial Park, with its ice arena, curling rink and ravine trails.</p>\
<p>The cities property values have steadily increased due to White Rock's attractive setting and amenities.</p>\
</div>\
 <br style=\"clear: left;\" />\
</div>\
",

	render: function(selector,neighborhoods) {
		var template = _.template(this.template);
		var html = template({'neighborhoods' : neighborhoods});
		$(selector).html(html);
	}
};

