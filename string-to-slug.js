String.prototype.toSlug = function() {

	var slug = this
		.toLowerCase()
		.replace(/[^\w ]+/gi,'')
		.replace(/ +/gi,'-')
	;

	return slug;
}