/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
 var chunk = function(arr, size) {
    let reverse = [], temp = [];
    
    for(let i=0; i<arr.length; i++){
        temp.push(arr[i]);

        if(temp.length == size){
            reverse.push(temp);
            temp = [];
        }
    }

    if(temp.length){
        reverse.push(temp);
    }

    return reverse;
};