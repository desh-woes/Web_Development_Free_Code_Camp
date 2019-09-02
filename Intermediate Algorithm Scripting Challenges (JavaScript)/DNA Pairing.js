/*
Prompt:
***************
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
    // Define gene map
    let geneMap = {
        "A" : "T",
        "G" : "C",
        "T" : "A",
        "C" : "G"
    };

    // Initialize output array
    let outputArr = [];

    // Loop through the strings and add the complements
    for (let i = 0; i<str.length; i++){
        let tempArr = [];
        tempArr.push(str[i], geneMap[str[i]]);
        outputArr.push(tempArr);
    }

    // Return the output array.
    return outputArr;
}

// Test cases.
console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));