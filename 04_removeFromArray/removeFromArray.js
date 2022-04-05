const removeFromArray = function(arr, ...args) {
    let newArray = [...arr];
    for (i = 0; i < arr.length; i++) {
        if (newArray.includes(args[i])) {
            newArray.splice(newArray.indexOf(args[i]), 1)
        }    
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
