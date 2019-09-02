/*
Prompt:
*********
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    // Check if the string is not null
    if(str.length <= 0){
        return null;
    }

    // Get the first letter of the string
    let firstLetter = str[0];

    // Test if the string is a vowel or consonant
    if (/[aeiou]/.test(firstLetter)){
        return str+"way";
    }

    // If what is left is not a vowel. i.e a consonant
    str = str.slice(1);
    return str+firstLetter+"ay";
}

// Test cases
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));