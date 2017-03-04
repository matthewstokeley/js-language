var MaximumLikelihoodTest = function MakeNCorpusTest(fn, args) {
	this.init.call(this, fn, args);
};

MaximumLikelihoodTest.prototype.test = function() {
	
	if (typeof this.result !== 'number') {
		return false;
	}

	console.log(this.result);

	return true;
};

module.exports = MaximumLikelihoodTest;