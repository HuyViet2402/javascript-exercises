const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, currentItem) => {return total + currentItem}, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => {return total * currentItem}, 1)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
	return Array.from({length: n}, (_, i) => i+1).reduce((total, currentItem) => {return total * currentItem}, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
