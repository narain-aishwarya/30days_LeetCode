/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
 var filter = function(arr, fn) {
    var ans = [];
    var n = arr.length;

    for(let i=0; i<n; i++){
        if(fn(arr[i],i)){
            ans.push(arr[i]);
        }
    }

    return ans;
};