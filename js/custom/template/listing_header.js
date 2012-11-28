app.templates.listing_header = "\
<div id=\"main-nav-holder\">\
	<nav id=\"main-nav\">\
		<table>\
			<tr>\
				<th><%= listing.address.line %></th>\
				<th><%= listing.price.toMoney() %></th>\
				<th><%= listing.bed %></th>\
				<th><%= listing.bath.total %></th>\
				<th><%= listing.sqft %> Sq. Ft.</th>\
			</tr>\
			<tr>\
				<td><%= listing.address.city %>, <%= listing.address.state_code %> <%= listing.address.postal_code %></td>\
				<td>Price</td>\
				<td>Beds</td>\
				<td>Baths</td>\
				<td><%= (listing.price / listing.sqft).toMoney() %> / Sq. Ft.</td>\
			</tr>\
		</table>\
		<table>\
			<tr>\
				<td>Status: <%= listing.status %></td>\
				<td>Built: <%= listing.year_built %></td>\
				<td>Lot Size: <%= listing.lot.sqft %></td>\
				<td>Days on Market: XX</td>\
			</tr>\
		</table>\
		<div class=\"progress-bar-wrapper\">\
			<ul>\
				<li id=\"listing_overview_nav\"><a href=\"#listing_overview\" target=\"_self\">Overview</a></li>\
				<li id=\"listing_features_nav\"><a href=\"#listing_features\" target=\"_self\">Property Details</a></li>\
				<li id=\"schools_nav\"><a href=\"#schools\" target=\"_self\">Schools</a></li>\
				<li id=\"neighborhood_nav\"><a href=\"#neighborhood\" target=\"_self\">Neighborhood</a></li>\
				<li id=\"designer_nav\"><a href=\"#designer\" target=\"_self\">Designer</a></li>\
				<li id=\"builder_nav\"><a href=\"#builder\" target=\"_self\">Builder</a></li>\
			</ul>\
			<div id=\"nav_bar\" class=\"progress-bar theme-bottom-border\"></div>\
		</div>\
	</nav>\
</div>\
"