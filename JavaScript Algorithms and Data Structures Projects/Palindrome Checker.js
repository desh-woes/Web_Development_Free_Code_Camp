/*
Prompt:
*****************
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the
same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR"among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/
function palindrome(str) {
    // First we make use of our string filter function
    let newStr = filterString(str);

    // Loop through the filter string from both ends
    let pointer1 = 0;
    let pointer2 = newStr.length - 1;

    while (pointer1 < pointer2){
        // Check for equality
        if (newStr[pointer1] !== newStr[pointer2]){
            return false
        }

        // Increase the value of the pointer
        pointer2--;
        pointer1++;
    }
    return true;
}

// Function to filter the string and remove all non-Alpha numeric characters.
function filterString(str){
    let outputString = "";
    for(let i = 0; i < str.length; i++){
        if(/[a-z]|[A-Z]|[0-9]/.test(str[i])){
            outputString += str[i];
        }
    }
    return outputString.toLowerCase();
}

console.log(palindrome("eye"));
console.log(palindrome("not a palindrome"));
console.log(filterString("not a palindrome"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("five|\_/|four"));