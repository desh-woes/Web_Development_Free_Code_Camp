/*
Prompt:
******************
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
function sumAll(arr) {
    // Get the larger number;
    let larger_num = arr[1];
    let smaller_num = arr[0];

    if(arr[0] > arr[1]){
        larger_num = arr[0];
        smaller_num = arr[1];
    }

    // Define the accumulator
    let accumulator  = 0;

    // Setup for loop to help with the sums.
    for (let i = smaller_num; i<larger_num+1; i++){
        accumulator+=i;
    }
    return accumulator;
}

console.log(sumAll([4, 1]));
console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));