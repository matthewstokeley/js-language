var NGramTest = function NGramTest(fn, args) {
	this.init.call(this, fn, args);
};

NGramTest.prototype.test = function() {
	
	if (typeof this.result !== 'number') {
		return false;
	}

	return true;

}

module.exports = NGramTest;