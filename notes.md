. Syntax
Function Declaration: A function declaration defines a named function using the function keyword, followed by the function name and its parameters.

javascript
Copy code
function greet() {
    console.log("Hello!");
}
Function Expression: A function expression involves creating a function and assigning it to a variable. This function can be named or anonymous.

javascript
Copy code
const greet = function() {
    console.log("Hello!");
};
2. Hoisting
Function Declaration: Function declarations are hoisted to the top of their containing scope. This means you can call the function before its declaration in the code.

javascript
Copy code
greet(); // Output: Hello!

function greet() {
    console.log("Hello!");
}
Function Expression: Function expressions are not hoisted the same way. Only the variable declaration is hoisted, but not the function assignment. You cannot call the function before it is defined.

javascript
Copy code
greet(); // Error: greet is not a function

const greet = function() {
    console.log("Hello!");
};
3. Naming
Function Declaration: Always has a name.

javascript
Copy code
function greet() {
    console.log("Hello!");
}
Function Expression: Can be anonymous or named. A named function expression can be useful for debugging purposes because the function name can appear in stack traces.

javascript
Copy code
const greet = function() {
    console.log("Hello!");
};

const sayHi = function sayHello() {
    console.log("Hi!");
};
4. Usage Context
Function Declaration: Typically used to declare functions at the top level of scripts or within other functions. They are well-suited for defining utility functions or any other reusable functionality.

Function Expression: Often used for assigning functions to variables, passing functions as arguments to other functions (callbacks), or creating closures. They are commonly used in functional programming patterns and event handling.

5. Scope
Function Declaration: Defined in the scope where they are declared. They are accessible throughout the entire scope, even before they are defined in the code due to hoisting.

Function Expression: Scoped to the block in which they are defined, just like variables declared with let or const. They are not accessible before their definition in the code.

6. Flexibility and Control
Function Declaration: Less flexible regarding when and how it can be defined. Function declarations are always hoisted, and their definition is fixed.

Function Expression: More flexible, allowing dynamic creation of functions based on conditions, loops, or even returned from other functions.

Example Summary
Here’s a concise example to highlight the differences:

javascript
Copy code
// Function Declaration
function add(a, b) {
    return a + b;
}

// Function Expression
const multiply = function(a, b) {
    return a * b;
};

// Calling both
console.log(add(2, 3));         // Output: 5
console.log(multiply(2, 3));    // Output: 6

// Function declaration is hoisted
subtract(5, 2);  // Output: 3
function subtract(a, b) {
    return a - b;
}

// Function expression is not hoisted
// divide(6, 2);  // Error: divide is not a function
const divide = function(a, b) {
    return a / b;
};
