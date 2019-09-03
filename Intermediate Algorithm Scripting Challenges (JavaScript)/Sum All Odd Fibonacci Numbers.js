/*
Prompt:
**********
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the
two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
    if(num <= 2){
        return 1;
    }
    // First generate an array containing all fibonacci numbers in the range
    let fibArr = [1, 1];
    let accumulator = 2;

    // Loop to generate the fib Numbers.
    while (fibArr[fibArr.length-1] <= num){
        let endIndex = fibArr.length -1;
        let endIndex2 = endIndex-1;
        let newSum = fibArr[endIndex] + fibArr[endIndex2];
        fibArr.push(newSum);
        if(newSum%2 !== 0 && newSum <= num){
            accumulator += newSum;
        }
    }

    console.log(accumulator);
    return accumulator;
}

// Test cases.
sumFibs(1);
sumFibs(1000);
sumFibs(4000000);
sumFibs(4);
sumFibs(75024);
sumFibs(75025);