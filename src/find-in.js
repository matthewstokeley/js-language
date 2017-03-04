var findIn = function(needle, haystack) {
        
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

a.findIn = findIn;