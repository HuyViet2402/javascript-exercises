const palindromes = function (str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reverseStr = cleanStr.split("").reverse().join("");
    return cleanStr == reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
