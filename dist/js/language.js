var a = {};;/**
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

a.cleanText = cleanText;;var maximumLikelihood = function maximumLikelihood(text, previousWord, word) {

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

a.maximumLikelihood = maximumLikelihood;;var findWordProbability = function(text, word, limit) {

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

a.findWordProbability = findWordProbability;;var makeNCorpus = function makeNCorpus(corpus, n) {

    if (!Array.isArray(corpus)) {
        throw new Error('corpus must be an array');
    }

    var nCorpus = [];

    // @todo hack
    nCorpus.push(corpus.slice(0, n));

    for (var i = 0; i < corpus.length; i++) {

        if (i % n === n-1) {
            // @todo hack
            i = i+1;

            var item = corpus.slice(i, n+i);
            if (item.length !== 0) {
                nCorpus.push(item);
            }
        }
    }
    
    return nCorpus;

};

if (!a || a === undefined) {
    var a = {};
}

a.makeNCorpus = makeNCorpus;;var makeCorpus = function(string) {
    return string.split(' ');
};

if (!a || a === undefined) {
	var a = {};
}

a.makeCorpus = makeCorpus;;var wordCount = function(corpus) {

	if (!Array.isArray(corpus)) {
		corpus = a.makeCorpus(corpus);
	}

	function isWordRepeated(wordObject, word) {

		if (wordObject.word === word) {
			return true;
		}

		return false;
	}

	function updateCount(value, index) {
	    // objectCount[index].count = objectCount[index].count + 1;
	}

	function createWordObject(word) {
		return {
			word: word,
			count: 1
		};
	}

	var loopObjectCount = function(objectCount, callback) {
		for (var i = 0; i < objectCount.length; i++) {
			console.log(objectCount[i]);
			callback.call(this, objectCount[i], i, objectCount);
		}
	};

	var ifWordExists = function(wordObject, index, array) {
		console.log('if word exists');
		if (isWordRepeated(wordObject, word)) {
			return true;
		}
		return false;
	};

	var checkIfWordExists = function(objectCount, word) {
		console.log(loopObjectCount(objectCount, ifWordExists));
		return loopObjectCount(objectCount, ifWordExists) === true ? true : false;
	};

	var fn = function(objectCount, word, index, array) {
		console.log(objectCount);
		if (!checkIfWordExists(objectCount, word)) {
			objectCount.push(createWordObject(word));
		} else {
			console.log('updateCount');
			loopObjectCount(objectCount, updateCount);
		}

		return objectCount;
	};

	function addWord(word, index, array) {
		return createWordObject(word);
	}

    // corpus.map(fn);
	var objectCount = corpus.forEach(function(word, index, array) { return fn.call(this, [], word, index, array); });
	// console.log(objectCount);
	return objectCount;

};

if (!a || a === 'undefined') {
	var a = {};
}

a.wordCount = wordCount;;var naiveBayes = function naiveBayes(set, document) {


};

if (!a || a === 'undefined') {
	var a = {};
}

a.naiveBayes = naiveBayes;;var nGram = function nGram(text, n) {

};

if (!a || a === 'undefined') {

	var a = {};

}

a.nGram = nGram;;;;;var findIn = function(needle, haystack) {
        
    if (!Array.isArray(haystack)) {
        return false;
    }
    
    // @todo replace with indexof
    for (var i = 0; i < haystack.length; i++) {
        if (needle === haystack[i]) {
            return haystack[i ];
        }
    }

    return false;

};

if (!a || a === undefined) {
    var a = {};
}

a.findIn = findIn;;var textClassification = function textClassification(sets, set, doc) {

};
// training set

if (!a || a === undefined) {
	var a = {};
}

a.textClassification = textClassification;;// if (module !== 'undefined') {
// 	if (module.exports !== 'undefined') {
// 		module.exports = a;
// 	}
// }
