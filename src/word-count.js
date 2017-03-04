var wordCount = function(corpus) {

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

a.wordCount = wordCount;