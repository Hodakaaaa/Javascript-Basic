# Function Declarations vs. Function Expressions in JavaScript

---

JavaScript functions can be defined in two main ways: as function declarations or function expressions. Understanding the differences between these two approaches is crucial for writing clear and efficient code.

## Syntax

Function Declaration : 
A function declaration defines a named function using the function keyword, followed by the function name and its parameters.

```
function greet() {
    console.log("Hello!");
}
```
Function Expression : 
A function expression involves creating a function and assigning it to a variable. This function can be named or anonymous.
```
const greet = function() {
    console.log("Hello!");
};
```
## Hoisting

Function Declaration : Function declarations are hoisted to the top of their containing scope. This means you can call the function before its declaration in the code.

```
greet(); // Output: Hello!

function greet() {
    console.log("Hello!");
}
```
Function Expression : Function expressions are not hoisted in the same way. Only the variable declaration is hoisted, but not the function assignment. You cannot call the function before it is defined.
```
greet(); // Error: greet is not a function

const greet = function() {
    console.log("Hello!");
};
```
## Naming

Function Declaration : Function declarations always have a name.
```
function greet() {
    console.log("Hello!");
}
```
Function Expression : Function expressions can be anonymous or named. Named function expressions can be useful for debugging purposes because the function name can appear in stack traces.
```
const greet = function() {
    console.log("Hello!");
};

const sayHi = function sayHello() {
    console.log("Hi!");
};
```
## Usage Context

Function Declaration : Function declarations are typically used to declare functions at the top level of scripts or within other functions. They are well-suited for defining utility functions or any other reusable functionality.

Function Expression : Function expressions are often used for assigning functions to variables, passing functions as arguments to other functions (callbacks), or creating closures. They are commonly used in functional programming patterns and event handling.

## Scope

Function Declaration : Function declarations are defined in the scope where they are declared. They are accessible throughout the entire scope, even before they are defined in the code due to hoisting.

Function Expression : Function expressions are scoped to the block in which they are defined, just like variables declared with let or const. They are not accessible before their definition in the code.

## Flexibility and Control

Function Declaration : Function declarations are less flexible regarding when and how they can be defined. Function declarations are always hoisted, and their definition is fixed.

Function Expression : Function expressions are more flexible, allowing dynamic creation of functions based on conditions, loops, or even returned from other functions.

Example Summary
Here’s a concise example to highlight the differences:

```
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
```
In summary, the choice between function declarations and expressions depends on your specific needs, such as code organization, scope control, and when the function needs to be available in your code.


