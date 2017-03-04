var FindWordProbabilityTest = function FindWordProbabilityTest(fn, args) {
	this.init.call(this, fn, args);
};

FindWordProbabilityTest.prototype.test = function() {
	console.log(this.result);

	return true;
};

module.exports = FindWordProbabilityTest;