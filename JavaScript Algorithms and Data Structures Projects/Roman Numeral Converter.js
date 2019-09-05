/*
Prompt:
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/
function convertToRoman(num) {
    // Initialize all roman numeral unique values
    let decValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let romanSymbol = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

    let pointer = decValue.length-1;
    let outputSting = "";
    while (num){
        let wholeNum = num / decValue[pointer] >> 0;

        // Get the remaining number
        num = num % decValue[pointer];

        // Generate the current string
        for (let i = 0; i < wholeNum; i++){
            outputSting += romanSymbol[pointer];
        }

        // Decrement pointer
        pointer--;
    }
    return outputSting;
}

console.log(convertToRoman(36));