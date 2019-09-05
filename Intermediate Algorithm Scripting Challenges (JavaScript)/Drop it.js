/*
Prompt: Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until
 the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    // Setup while loop to keep checking the condition
    while (!func(arr[0])){
        arr.splice(0, 1);
        if(arr.length === 0){
            // In a case where the array is empty, return an empty array
            return []
        }
    }

    // Return the final array
    return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });