const removeFromArray = function(array, ...args) {
    args.forEach((arg) =>{
        while(array.indexOf(arg) >= 0) {
            index = array.indexOf(arg);
            if(index >= 0) array.splice(index, 1);
        }
    });
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
