String.prototype.toSlug = function() {

	var slug = this
		.toLowerCase()
		.replace(/[^\w ]+/g,'')
		.replace(/ +/g,'-')
	;

	return slug;
}