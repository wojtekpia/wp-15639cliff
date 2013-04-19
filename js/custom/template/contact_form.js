widgets.contact_form = {
	template:"\
<button id=\"contact-agent\">Go See This Home</button>\
<div id=\"contact-form\" title=\"Contact <%= listing.agent.name.first %> about <%= listing.address.line %>\">\
    <p class=\"validateTips\">All form fields are required.</p>\
    <form>\
    <fieldset>\
        <table>\
            <tr><td class=\"contact-form-label\"><label for=\"firstName\">First Name</label></td>\
            <td><input type=\"text\" name=\"firstName\" id=\"firstName\" class=\"text ui-widget-content ui-corner-all\" /></td></tr>\
            <tr><td class=\"contact-form-label\"><label for=\"lastName\">Last Name</label></td>\
            <td><input type=\"text\" name=\"lastName\" id=\"lastName\" class=\"text ui-widget-content ui-corner-all\" /></td></tr>\
            <tr><td class=\"contact-form-label\"><label for=\"email\">Email</label></td>\
            <td><input type=\"text\" name=\"email\" id=\"email\" value=\"\" class=\"text ui-widget-content ui-corner-all\" /></td></tr>\
            <tr><td class=\"contact-form-label\"><label for=\"phone\">Phone</label></td>\
            <td><input type=\"text\" name=\"phone\" id=\"phone\" value=\"\" class=\"text ui-widget-content ui-corner-all\" /></td></tr>\
            <tr><td class=\"contact-form-label\"><label for=\"message\">Message</label></td>\
            <td><textarea name=\"message\" id=\"message\" value=\"\" class=\"text ui-widget-content ui-corner-all\" /></td></tr>\
        </table>\
    </fieldset>\
    </form>\
</div>\
",

	render: function(selector,listing) {
		var template = _.template(this.template);
		var html = template({'listing' : listing});
		$(selector).html(html);

		function updateTips( t ) {
            tips
                .text( t )
                .addClass( "ui-state-highlight" );
            setTimeout(function() {
                tips.removeClass( "ui-state-highlight", 1500 );
            }, 500 );
        }

        function checkLength( o, n, min, max ) {
            if ( o.val().length > max || o.val().length < min ) {
                o.addClass( "ui-state-error" );
                updateTips( "Length of " + n + " must be between " +
                    min + " and " + max + "." );
                return false;
            } else {
                return true;
            }
        }

    	function checkRegexp( o, regexp, n ) {
            if ( !( regexp.test( o.val() ) ) ) {
                o.addClass( "ui-state-error" );
                updateTips( n );
                return false;
            } else {
                return true;
            }
        }

        var firstName = $( "#firstName" ),
        	lastName = $( "#lastName" ),
        	phone = $( "#phone" ),
            email = $( "#email" ),
            message = $( "#message" ),
            allFields = $( [] ).add( firstName ).add( lastName ).add( phone ).add( email ).add( message ),
            tips = $( ".validateTips" );

		$( "#contact-form" ).dialog({
            autoOpen: false,
            height: 400,
            width: 500,
            modal: true,
            resizable: false,
            buttons: {
                "Send": function() {
                    var bValid = true;
                    allFields.removeClass( "ui-state-error" );

                    bValid = bValid && checkLength( firstName, "First Name", 1, 16 );
                    bValid = bValid && checkLength( lastName, "Last Name", 1, 16 );
                    bValid = bValid && checkLength(email, "Email", 1, 80);
                    bValid = bValid && checkLength(phone, "Phone", 1, 16);
                    bValid = bValid && checkLength( message, "Message", 1, 80 );

                    bValid = bValid && checkRegexp( firstName, /^[a-z]([0-9a-z_])+$/i, "First name may consist of a-z, 0-9, underscores, begin with a letter." );
                    bValid = bValid && checkRegexp( lastName, /^[a-z]([0-9a-z_])+$/i, "Last name may consist of a-z, 0-9, underscores, begin with a letter." );
                    bValid = bValid && checkRegexp( phone, /^([- 0-9])+$/, "Phone field only allow : 0-9" );
                    // From jquery.validate.js (by joern), contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
                    bValid = bValid && checkRegexp( email, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "eg. ui@jquery.com" );
                    //bValid = bValid && checkRegexp( message, /^([0-9a-zA-Z])+$/, "Message field only allow : a-z 0-9" );

                    if ( bValid ) {
                        tp.postLead(firstName.val(), lastName.val(), phone.val(), email.val(), message.val(), listing);
                        $( this ).dialog( "close" );
                    }
                },
                Cancel: function() {
                    $( this ).dialog( "close" );
                }
            },
            close: function() {
                allFields.val( "" ).removeClass( "ui-state-error" );
            }
        });

		$( "#contact-agent" ).button().click(function() {
        	$( "#contact-form" ).dialog( "open" );
    	});
	}
};
