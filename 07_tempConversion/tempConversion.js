const convertToCelsius = function(temp) {
  temp = (temp - 32) * 5/9;
  tempRoundUp = Math.ceil(temp * 10) /10;
  return tempRoundUp;
};

const convertToFahrenheit = function(temp) {
  temp = temp * 9/5 + 32;
  tempRoundUp = Math.ceil(temp * 10) /10;
  return tempRoundUp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
