app.templates.listing_header = "\
<div>\
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
</div>\
"