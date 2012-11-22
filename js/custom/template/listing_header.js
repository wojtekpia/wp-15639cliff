app.templates.listing_header = "\
<div class=\"docked\">\
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
	<div>\
		<div id=\"nav_bar\" class=\"progress-bar theme-bottom-border\"></div>\
		<table id=\"nav_table\" class=\"theme-menu\" cellspacing=\"0\">\
			<tbody>\
				<tr>\
				<td><a href=\"#listing_overview\" target=\"_self\">Overview</a></td>\
				<td><a href=\"#listing_features\" target=\"_self\">Property Details</a></td>\
				<td><a href=\"#schools\" target=\"_self\">Schools</a></td>\
				<td><a href=\"#neighborhood\" target=\"_self\">Neighborhood</a></td>\
				<td><a href=\"#designer\" target=\"_self\">Designer</a></td>\
				<td><a href=\"#builder\" target=\"_self\">Builder</a></td>\
				</tr>\
			</tbody>\
		</table>\
	</div>\
	<br>\
	<br>\
	<br>\
	<br>\
</div>\
"