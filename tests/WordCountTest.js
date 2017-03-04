var WordCountTest = function WordCountTest(fn, args) {

	this.text = args[0];
	this.init.call(this, fn, args);
};

WordCountTest.prototype.test = function() {

	console.log(this.result);

	// check types
	
	if (!Array.isArray(this.result)) {
		console.log('word count result must be an array');
		return false;
	}

	for (var i = 0; i < this.result.length; i++) {

		if (typeof this.result[i] !== 'object') {
			console.log('word count object must be an object')
		}

		for (var property in this.result[i]) {

			if (typeof this.result[i].word !== 'string') {
				console.log('word count object property word must be a string');
				return false;
			}

			if (typeof this.result[i].count !== 'number') {
				console.log('word count object property count must be a number');
				return false;
			}

		}

	}

	// @todo refactor
	function formatText(text) {

		if (!Array.isArray(text)) {
			text = text.split(' ');
		}

		return text;

	}
	
	function countWord(wordCountObject, text) {
		var count = 0;

		text.forEach(function(word, index, array) {
			if (word === wordCountObject.word) {
				count++;
			}
		}.bind(this));

		if (count !== wordCountObject.count) {
			console.log('the word' + wordCountObject.word + ' count does not match');
			return false;
		}

		return true;
	}

	var check = this.result.map(function(wordCountObject, index, array) {
		return countWord(wordCountObject, formatText(this.text));
	}.bind(this));


	// @todo update with a new pattern
	var pass = true;

	check.forEach(function(value) {
		if (!value) {
			pass = false;
		}
	}.bind(this));

	if (!pass) {
		return false;
	}

	return true;


};

module.exports = WordCountTest;
