var MakeNCorpusTest = function MakeNCorpusTest(fn, args) {
	this.init.call(this, fn, args);
};

MakeNCorpusTest.prototype.test = function() {

	if (!Array.isArray(this.result)) {
		return false;
	}

	for (var i = 0; i < this.result.length; i++) {

		if (i !== this.result.length - 1) {

			if (this.result[i].length !== 3) {
				console.log('gram is not the correct size');
				return false;
			}

		}

	}

	return true;
};

module.exports = MakeNCorpusTest;