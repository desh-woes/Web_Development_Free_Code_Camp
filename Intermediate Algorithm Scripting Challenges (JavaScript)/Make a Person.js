/*
Prompt:
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
*/

let Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let splitNames = firstAndLast.split(" ");

    // Method 1
    this.getFullName = function() {
        return splitNames.join(" ");
    };

    // Method 2
    this.getFirstName = function () {
      return splitNames[0];
    };

    // Method 3
    this.getLastName = function () {
        return splitNames[splitNames.length-1]
    };

    // Method 4
    this.setFirstName = function (firstName) {
      splitNames[0] = firstName;
    };

    // Method 5
    this.setLastName = function (lastName) {
      splitNames[splitNames.length-1] = lastName;
    };

    // Method 6
    this.setFullName = function (fullName) {
      splitNames = fullName.split(" ");
    };

    return firstAndLast;
};

let bob = new Person('Bob Ross');
bob.getFullName();