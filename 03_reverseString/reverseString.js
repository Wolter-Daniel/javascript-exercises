const reverseString = function(word) {
let string = '';
let reverseWord = '';
let stringLenght = 0;

string = word;
stringLenght = string.length;

// bucle que cuenta longitud del string para usarlo de indice y escribir un nuevo string pero inverso.//
for(let i = (stringLenght - 1); i >= 0; i--){
    reverseWord += string.charAt(i);
}
return reverseWord;
};
// Do not edit below this line
module.exports = reverseString;
