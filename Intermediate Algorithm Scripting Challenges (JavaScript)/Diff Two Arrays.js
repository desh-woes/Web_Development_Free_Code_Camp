/*
# Prompt
------------
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    // Define output array
    let outputArr = [];
    
    // Define helper function
    function findDifference(firstArr, secondArr) {
        // Loop through the first arr to see if the element is not in the second arr
        for(let i = 0; i < firstArr.length; i++){
            if (secondArr.indexOf(firstArr[i]) === -1){
                outputArr.push(firstArr[i]);
            }
        }
    }

    // Call function on both sides.
    findDifference(arr1, arr2);
    findDifference(arr2, arr1);
    return outputArr;
}

// Test Cases
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));