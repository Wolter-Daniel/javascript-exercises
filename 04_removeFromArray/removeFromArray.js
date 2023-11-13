const removeFromArray = function(array, ...element) {
    let removeArray = [];
    let coincidencia = 0;
    for (let i = 0; i < array.length; i++){
        coincidencia = 0;
        for (let x = 0; x <element.length; x++){
            if (array[i] === element[x]){
                coincidencia = 1;
            }
        }

       if (coincidencia == 0){
            removeArray.push(array[i]);
        }
    }
return removeArray;  
}

// Do not edit below this line
module.exports = removeFromArray;
