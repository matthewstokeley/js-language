var makeNCorpus = function makeNCorpus(corpus, n) {

    if (!Array.isArray(corpus)) {
        throw new Error('corpus must be an array');
    }

    var nCorpus = [];

    // @todo implement a more complete queue
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

a.makeNCorpus = makeNCorpus;
