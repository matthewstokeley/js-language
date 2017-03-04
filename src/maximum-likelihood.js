var maximumLikelihood = function maximumLikelihood(text, previousWord, word) {

	if (typeof word !== 'string' ||
		typeof previousWord !== 'string') {
		throw new Error('words must be a string');
	}

	var options = {
		corpus: a.makeCorpus(text),
		previousWord: previousWord,
		word: word,
		previousWordCount: 0,
		nextWordCount: 0
	};

	function previousWordMatch(text, i) {
		if (text.corpus[i] === text.previousWord) {
			text.previousWordCount++;
			nextWordMatch.call(this, text, i);
		}
	}

	function nextWordMatch(text, i) {
		if (text.corpus[i + 1] === text.word) {
			text.nextWordCount++;
		}
	}

	function loopCorpus(text) {
		for (var i = 0; i < text.corpus.length; i++) {
			previousWordMatch.call(this, text, i);
		}
		return text;
	}

	var result = loopCorpus.call(this, options);

	return result.nextWordCount / result.previousWordCount;
};


if (!a || a === undefined) {
	var a = {};
}

a.maximumLikelihood = maximumLikelihood;