app.templates.listing_overview = "\
<div>\
	<div id=\"listing-images\" class=\"nivoSlider\" style=\"width:700px;height:550px;\">\
		<% for(var photo_count = 0; photo_count < listing.photo.count; photo_count++){ %>\
        	<img src=\"<%= listing.photo.href.replace(\"{i}\",photo_count).replace(\"{s}\",\"l\") %>\" data-thumb=\"<%= listing.photo.href.replace(\"{i}\",photo_count).replace(\"{s}\",\"t\") %>\" alt=\"\"  />\
        <% } %>\
    </div>\
	<table>\
        <tr><td><%= listing.description %></td></tr>\
        <tr><td><table>\
        	<tr><th>Property Type</th><td><%= listing.zoning %></td><th>Style</th><td><%= listing.style %></td></tr>\
        	<tr><th>Community</th><td><%= listing.neighborhood %></td><th>MLS #</th><td><%= listing.mls.listing.id %></td></tr>\
        </table></td></tr>\
        <tr><td><table>\
        	<tr><th>Listing provided courtesy of</th><th>Source</th></tr>\
        	<tr><td><%= listing.agent.name %></td><td><%= listing.mls.name %></td></tr>\
        </table></td></tr>\
	</table>\
</div>\
"