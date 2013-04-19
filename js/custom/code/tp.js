var tp = {

	escapeHtml: function (string) {
		var entityMap = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': '&quot;',
			"'": '&#39;',
			"/": '&#x2F;'
		};

		return String(string).replace(/[&<>"'\/]/g, function (s) {
			return entityMap[s];
		});
	},

    postLead: function(firstName, lastName, phone, email, message, listing) {
    	var tpLeadXml = "<?xml version=\"1.0\"?>\
<LeadList>\
	<Version>2.1</Version>\
	<Status Code=\"200\" Description=\"Success\"/>\
	<Lead>\
		<Contact>\
			<Note>" + this.escapeHtml(message) + "</Note>\
			<Name>\
				<First>" + firstName + "</First>\
				<Last>" + lastName + "</Last>\
			</Name>\
			<PhoneList> <!-- (Phone+ )-->\
				<Phone> <!-- (Number , Extension? , Description? , TimeFrom? , TimeTo? )-->\
					<Number>" + phone + "</Number>\
				</Phone>\
			</PhoneList>\
		<Email>" + email + "</Email>\
		<Role>Buyer</Role>\
	</Contact>\
	<LeadOwnerID>" + listing.agent.tp.id + "</LeadOwnerID>\
	<LeadSource>" + document.location + "</LeadSource>\
	<IsTPAccount>true</IsTPAccount>\
	<LeadSubsource>" + listing.address.line + "</LeadSubsource>\
	</Lead>\
</LeadList>";
//alert(tpLeadXml);

		var jqxhr = $.post("http://leads.topproduceronline.com/leads/Distributeleads.asp", tpLeadXml, function() { })
	    .success(function() {  })
	    .error(function() {  })
	    .complete(function() {  });
    }
};