const sumAll = function(start, end) {
    if(start !== parseInt(start, 10)  || end !== parseInt(end, 10) || start < 0 || end < 0) 
        return "ERROR";
    if(start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    return ((end - start + 1) * (start + end))/2;
};

// Do not edit below this line
module.exports = sumAll;
