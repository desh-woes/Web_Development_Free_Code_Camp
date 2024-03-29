/*
Prompt: Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need
to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or []notation.
*/

function truthCheck(collection, pre) {
    // Loop through the collection of objects
    for(let i = 0; i<collection.length; i++){
        let currObj = collection[i];
        if (!currObj.hasOwnProperty(pre)){
            console.log(false);
            return false;
        }
        if (!currObj[pre]){
            console.log(false);
            return false;
        }
    }
    console.log("True");
    return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");
truthCheck([{"single": "yes"}], "single");
truthCheck([{"single": ""}, {"single": "double"}], "single");
truthCheck([{"single": "double"}, {"single": undefined}], "single");
truthCheck([{"single": "double"}, {"single": NaN}], "single");
