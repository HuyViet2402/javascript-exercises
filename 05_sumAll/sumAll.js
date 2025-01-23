const sumAll = function(idx1, idx2) {
    if (!Number.isInteger(idx1) || !Number.isInteger(idx2) || idx1 < 0 || idx2 < 0) {
        return "ERROR";
    }
    let largeNumber = null;
    let smallNumber = null;

    if(idx1 > idx2) {
        largeNumber = idx1;
        smallNumber = idx2;
    }
    else {
        largeNumber = idx2;
        smallNumber = idx1;
    }
    let sum = 0;
    for(let i = smallNumber; i <= largeNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
