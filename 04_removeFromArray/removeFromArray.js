const removeFromArray = function(list, ...removeIdx) {
    answer = [];
    for (let i = 0; i < list.length; i++) {
        if (!removeIdx.includes(list[i])) {
            answer.push(list[i]);
        }
    }
    return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
