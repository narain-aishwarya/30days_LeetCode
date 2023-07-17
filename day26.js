/**
 * @param {Function} fn
 * @return {Array}
 */
 Array.prototype.groupBy = function(fn) {
    const arr = {}
    for(let key of this){
        const a = fn((key))
        arr[a] ||=[]
        arr[a].push(key)
    }
    return arr
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */