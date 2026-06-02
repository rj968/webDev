const removeFromArray = function(arr, num) {
    if(!arr) return ;
    return arr.filter(foo => foo !== num)
};

console.log(removeFromArray([3,5,3,32],3))

// Do not edit below this line
module.exports = removeFromArray;
