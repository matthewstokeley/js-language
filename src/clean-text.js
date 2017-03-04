/**
 * remove punctuation
 * @param  {[type]} text [description]
 * @return {[type]}      [description]
 */
var cleanText = function cleanText(text) {
	
	var nonalphanumeric = new RegExp(/[^a-z0-9\s]/gi);

	if (nonalphanumeric.test(text)) {
		text = text.replace(nonalphanumeric, '');
	}

	// var doublespace = new RegExp(/[\s\s]/gi);

	// if (doublespace.test(text)) {
	//     text = text.replace(doublespace, '');
	// }

	return text.toLowerCase();

};

if (!a || a === undefined) {
	var a = {};
}

a.cleanText = cleanText;