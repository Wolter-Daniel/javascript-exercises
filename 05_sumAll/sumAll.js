const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 != 'number' || typeof num2 != 'number'){
        return 'ERROR'
    }else{
        let comparador = 0;
        let expresionMin = 0;
        if (num1 < num2){
            expresionMin = num1;
            comparador = num2;
        }else{
            expresionMin = num2;
            comparador = num1;
        }
    
        let sumIntervalResult = expresionMin;
    
    
        for (let i = expresionMin; i < comparador; i++){
            let aux = i;
            sumIntervalResult += (++aux);
        }
    
      return sumIntervalResult;  
    }

};
// Do not edit below this line
module.exports = sumAll;
