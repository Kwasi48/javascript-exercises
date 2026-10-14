const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a  - b;
};

const sum = function(array) {
	return array.reduce((total, item) => total + item , 0)
};

const multiply = function(array) {
  return array.reduce((acc, ite) => acc * ite, 1)
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++){
    result *= i;
  }
  return result;
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
