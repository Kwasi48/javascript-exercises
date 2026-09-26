const removeFromArray = function(array, ...args) {
    array1 = array.filter((arr) => !args.includes(arr))
    return array1
};

// Do not edit below this line
module.exports = removeFromArray;
