widgets.builder = {
	template:"\
<div>\
<h2 id=\"details-header\" class=\"h2 inline\">Builder Info for <span class=\"address-string\"></span></h2>\
<img src=\"http://www.mecdevelopments.ca/wp-content/themes/twentyten/images/mec-logo.gif\"/>\
<p>MEC Urban Developments is a full-service building company that specializes in residential construction and renovations, catering to the diverse needs of clients across the Fraser Valley and Lower Mainland. Committed to creating homes that are as functional as they are stylish, MEC works with you from the initial drawing stage right through to the final finishing touches of your home, for which we collaborate with the talented Done to the Nines design team. With each home we build, MEC strives to deliver contemporary design, custom living spaces and quality craftsmanship. When you build with MEC, every detail is considered in designing and constructing a beautiful home that accommodates your lifestyle and embodies your personality, from the inside, out.</p>\
<p>Regardless the size of a project, MEC offers superior project management, taking care of all the details of a build from start-to-finish. And as a licensed building company, you’ll enjoy peace of mind from a home that is backed by the 2-5-10 year home warranty program.</p>\
<a href=\"http://www.mecdevelopments.ca/\">website</a>\
</div>\
",

	render: function(selector) {
		var template = _.template(this.template);
		var html = template();
		$(selector).html(html);
	}
};
