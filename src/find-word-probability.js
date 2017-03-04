var findWordProbability = function(text, word, limit) {

	if (!limit) {
		limit = 10;
	}

	var verifyInArray = function verifyInArray(needle, haystack) {
	    if (!Array.isArray(haystack)) {
	        return false;
	    }

	    for (var i = 0; i < haystack.length; i++) {
	        if (needle === haystack[i]) {
	            return true;
	        }
	    }

	    return false;
	};

	function sort(arr) {
		function loop(array) {
			for (var i = 0; i < array.length - 1; i++) {
				if (array[i].probability < array[i + 1].probability) {
					var current = array[i];
					var next = array[i + 1];

					array[i] = next;
					array[i + 1] = current;
					
					loop(array);				
				}
			}
			return array;
		}

		return loop.call(this, arr);
	}

	function loopCorpus(corpusWord, index, array) {
		// if corpus word follows word

		if (word === array[index - 1]) {
			return {
				probability: a.maximumLikelihood(text, word, corpusWord),
				word: corpusWord
			};
		} else {
			return false;
		}
	}

	var results = [];

	function filterResults(result) {

		if (result === false) {
			return false;
		}

		if (typeof result !== 'object') {
			return false;
		}

		if (result.probability === 0) {
			return false;
		}

		if(!verifyInArray(result.word, results)) {
			results.push(result.word);
		} else {
			return false;
		}

		return true;
	}
	
	return  sort(a.makeCorpus(text).map(loopCorpus).filter(filterResults)).slice(0, limit);

};

// var maximumLikelihood = function maximumLikelihood(text, previousWord, word) {

// 	if (typeof word !== 'string' ||
// 		typeof previousWord !== 'string') {
// 		throw new Error('words must be a string');
// 	}

// 	// find every instance of the word and the word that follows it
// 	// then calculate the probability for ea

// 	var options = {
// 		corpus: a.makeCorpus(text),
// 		previousWord: previousWord,
// 		word: word,
// 		previousWordCount: 0,
// 		nextWordCount: 0
// 	};

// 	function previousWordMatch(text, i) {
// 		if (text.corpus[i] === text.previousWord) {
// 			text.previousWordCount++;
// 			nextWordMatch.call(this, text, i);
// 		}
// 	}

// 	function nextWordMatch(text, i) {
// 		if (text.corpus[i + 1] === text.word) {
// 			text.nextWordCount++;
// 		}
// 	}

// 	function loopCorpus(text) {
// 		for (var i = 0; i < text.corpus.length; i++) {
// 			previousWordMatch.call(this, text, i);
// 		}
// 		return text;
// 	}

// 	var result = loopCorpus.call(this, options);

// 	return result.nextWordCount / result.previousWordCount;
// };


if (!a || a === undefined) {
	var a = {};
}

a.findWordProbability = findWordProbability;