/*
Prompt: Flatten a nested array. You must account for varying levels of nesting.
*/

// Function interface calling the recursive helper function.
function steamrollArray(arr) {
    // I'm a steamroller, baby
    let outputArr = [];
    helper(arr, outputArr);
    console.log(outputArr);
    return outputArr;
}

// Recursive helper function to help with flattening the array
function helper(currArr, outputArr){
    // For each array, loop through the values
    for(let i = 0; i<currArr.length; i++){
        // If the current value is another array, then
        if (Array.isArray(currArr[i])){
            helper(currArr[i], outputArr);
        }
        else{
            outputArr.push(currArr[i]);
        }
    }
}


steamrollArray([1, [2], [3, [[4]]]]);