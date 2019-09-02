/*
Prompt
*********
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

function destroyer(arr) {
    let args = new Set(Array.from(arguments).slice(1));

    // Remove all the values
    for (let i = 0; i < arr.length; i++) {
        if (args.has(arr[i])){
            arr.splice(i, 1);
            // Reduce the pointer to mitigate offset of the removed value.
            i-=1
        }
    }
    // Return Arr
    return arr
}

// Test cases
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));