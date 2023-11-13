const convertToCelsius = function(tempFahrenheit) {
let result = ((tempFahrenheit - 32) * (5/9));
return returnResult(result);
};

const convertToFahrenheit = function(tempCelcius) {
  let result = ((tempCelcius * (9/5)) + 32);
  return returnResult(result);
};

function returnResult(result){
  if (Number.isInteger(result)) {
    return result;
  } else{
    return result = Math.round(result * 10) /10;
  } 
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
