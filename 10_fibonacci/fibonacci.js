const fibonacci = function(input) {
    let cleanInput = parseInt(input)
    if(Number.isNaN(cleanInput) || cleanInput < 0) { return "OOPS" }
    if (cleanInput === 0) {
        return 0;
    }

    if (cleanInput === 1) {
        return 1;
    }

    let a = 0;
    let b = 1;
    for (let i = 2; i <= cleanInput; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
