var StringTest = function MakeNCorpusTest(fn, args) {
	this.init.call(this, fn, args);
};

StringTest.prototype.test = function() {
	var nonalphanumeric = new RegExp(/[^a-z0-9\s]/gi);

	if (nonalphanumeric.test(this.result)) {
		return false;
	}

	return true;
	
};

module.exports = StringTest;