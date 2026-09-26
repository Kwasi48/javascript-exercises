const convertToCelsius = function(deg) {
  // (x-32) *(5//9)
  x = (deg -32) * (5/9);
  return Math.round(x * 10) / 10;
};

const convertToFahrenheit = function(deg) {
  //(x *(9/5) + 32)
  x  = (deg * (9/5)) + 32;
  return Math.round(x * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
