var map_edureka = function() {
	var category;
	if ( this.pages >= 250 )
		category = "Big Book";
	else
		category = "Small Book";
	emit(category, {name: this.name});
};

var reduce_edureka = function(key, values) {
	var sum = 0;
	values.forEach(function(doc) {
		sum += 1;
	});
	return {books: sum};
};