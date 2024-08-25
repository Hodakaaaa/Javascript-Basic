// JAVASCRIPTS FUNDAMENTAL




// 2.1 Hello World !
// alert("Hello world !")




// 2.2 Code Structure
// Statements: Statements are syntax constructs and commands that perform actions.
// We can have as many statements in our code as we want. Statements can be separated with a semicolon.
// alert("Hello"); alert("World");

// Semicolons: A semicolon may be omitted in most cases when a line break exists.
// alert('Hello')
// alert('World')
// Here, JavaScript interprets the line break as an “implicit” semicolon. This is called an automatic semicolon insertion.

// In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!
// There are cases when a newline does not mean a semicolon. For example:
// alert(3 +
//     1
//     + 2);





// 2.3 The modern mode, "use strict"
// The directive looks like a string: "use strict" or 'use strict'. 
// When it is located at the top of a script, the whole script works the “modern” way.
// "use strict";
// this code works the modern way

// Example
// "use strict";

// This will throw a ReferenceError because x is not declared
// x = 3.14;

// This will throw a TypeError because we cannot delete a variable in strict mode
// var y = 10;
// delete y;

// This will throw a SyntaxError due to duplicate parameter names
// function exampleFunction(a, a) {
//     return a + a;
// }

// Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.




// 2.4 Variables

// let message;
// message = 'Hello!';
// alert(message); // shows the variable content

// To be concise, we can combine the variable declaration and assignment into a single line:
// let message = 'Hello!'; // define the variable and assign the value
// alert(message); // Hello!

// We can also declare multiple variables in one line:
// let user = 'John', age = 25, message = 'Hello';

// We can also declare the variable in the multiline variant
// let user = 'John',
//   age = 25,
//   message = 'Hello';

// We can change the value of variable as we want
// let name;
// name = "mandhoj";
// name = "sammar" ;
// alert(name);

// We can also declare two variables and copy data from one into the other.
// let hello = 'Hello world!';
// let message;
// copy 'Hello world' from hello into message
// message = hello;
// now two variables hold the same data
// alert(hello); // Hello world!
// alert(message); // Hello world!

// Variable naming
// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.
// let userName;
// let test123;

// What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning.
// let $ = 1; // declared a variable with the name "$"
// let _ = 2; // and now a variable with the name "_"
// alert($ + _); // 3

// Examples of incorrect variable names:
// let 1a; // cannot start with a digit
// let my-name; // hyphens '-' aren't allowed in the name

// Case matters
// Variables named apple and APPLE are two different variables.

// Reserved name : reserved name cannot be used as the variable because they are already been predefined by the language itself
// For example: let, class, return, and function are reserved.
// let let = 5; // can't name a variable "let", error!
// let return = 5; // also can't name it "return", error!

// Constant
// To declare a constant (unchanging) variable, use const instead of let:
// const myBirthday = '18.04.1982';




// 2.5 Datatypes

// Number: The number type represents both integer and floating point numbers.
// let n = 123;
// n = 12.345;

// There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.
// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

// Infinity: Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
// We can get it as a result of division by zero:
// alert( 1 / 0 ); // Infinity
// alert( Infinity ); // Infinity

// NAN: NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
// alert( "not a number" / 2 ); // NaN, such division is erroneous
// NaN is sticky. Any further mathematical operation on NaN returns NaN:
// alert( NaN + 1 ); // NaN
// alert( 3 * NaN ); // NaN
// alert( "not a number" / 2 - 1 ); // NaN

// BigInt: BigInt type was recently added to the language to represent integers of arbitrary length.
// BigInt value is created by appending n to the end of an integer:
// the "n" at the end means it's a BigInt
// const bigInt = 1234567890123456789012345678901234567890n;

// String: A string in JavaScript must be surrounded by quotes.
// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;

// Types of quotes
// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
// let name = "John";
// embed a variable
// alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
// alert( `the result is ${1 + 2}` ); // the result is 3

// Boolean: The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
// For instance:
// let nameFieldChecked = true; // yes, name field is checked
// let ageFieldChecked = false; // no, age field is not checked

// Boolean values also come as a result of comparisons:
// let isGreater = 4 > 1;
// alert( isGreater ); // true (the comparison result is "yes")

// Null Value
// let age = null;

// The Undefined Value:The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined:
// let age;
// alert(age); // shows "undefined"

// Objects and Symbol
// The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

// The typeof operator: The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.
// A call to typeof x returns a string with the type name:
// typeof undefined // "undefined"
// typeof 0 // "number"
// typeof 10n // "bigint"
// typeof true // "boolean"
// typeof "foo" // "string"
// typeof Symbol("id") // "symbol"
// typeof Math // "object"  (1)
// typeof null // "object"  (2)
// typeof alert // "function"  (3)




// 2.6 Interaction: alert, prompt, confirm
// Alert: shows a message
// alert("Hello");

// Prompt: shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null
// result = prompt(title, [default]);
// let age = prompt('How old are you?', 100);
// alert(`You are ${age} years old!`); // You are 100 years old!

// Confirm: shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
// let isBoss = confirm("Are you the boss?");
// alert( isBoss ); // true if OK is pressed



// 2.7 Type Conversion

// String Conversion
// let value = true;
// alert(typeof value); // boolean
// value = String(value); // now value is a string "true"
// alert(typeof value); // string

// Numeric Conversion
// let str = "123";
// alert(typeof str); // string
// let num = Number(str); // becomes a number 123
// alert(typeof num); // number

// Boolean Conversion
// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false
// alert( Boolean("hello") ); // true
// alert( Boolean("") ); // false




// 2.8 Basic Operators Math

// Terms Unary, Binary, Operands
// An operand is what operators are applied to. For instance, in the multiplication of 5 * 2
// there are two operands: the left operand is 5 and the right operand is 2. 
// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
// let x = 1;
// x = -x;
// alert( x ); // -1, unary negation was applied
// An operator is binary if it has two operands. The same minus exists in binary form as well:
// let x = 1, y = 3;
// alert( y - x ); // 2, binary minus subtracts values

// Maths
// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.

// Remainder %
// The remainder operator %, despite its appearance, is not related to percents.
// The result of a % b is the remainder of the integer division of a by b.
// For instance:
// alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
// alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
// alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

// Exponentiation **
// The exponentiation operator a ** b raises a to the power of b.
// For instance:
// alert( 2 ** 2 ); // 2² = 4
// alert( 2 ** 3 ); // 2³ = 8
// alert( 2 ** 4 ); // 2⁴ = 16

// String Concatination with binary +
// let s = "my" + "string";
// alert(s); // mystring

// Note that if any of the operands is a string, then the other one is converted to a string too.
// For example:
// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"

// alert(2 + 2 + '1' ); // "41" and not "221"
// Here, operators work one after another.
// The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

// alert('1' + 2 + 2); // "122" and not "14"
// Here, the first operand is a string, the compiler treats the other two operands as strings too. 
// The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

// Numeric Conversion, unary +
// The plus + exists in two forms: the binary form that we used above and the unary form.
// The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers.
// But if the operand is not a number, the unary plus converts it into a number.
// For example:
// let x = 1;
// alert( +x ); // 1 No effect on number
// let y = -2;
// alert( +y ); // -2

// Converts non-numbers
// alert( +true ); // 1
// alert( +"" );   // 0

// The binary plus would add them as strings:
// let apples = "2";
// let oranges = "3";
// alert( apples + oranges ); // "23", the binary plus concatenates strings

// If we want to treat them as numbers, we need to convert and then sum them:
// let apples = "2";
// let oranges = "3";
// both values converted to numbers before the binary plus
// alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

// Operator Precedence
// unary plus	+
// unary negation	-
// exponentiation	**
// multiplication	*
// division	/
// addition	+
// subtraction	-
// assignment

// Assignment Operator
// let x = 2 * 2 + 1;
// alert( x ); // 5

// Assignemnt = Returns a value
// let a = 1;
// let b = 2;
// let c = 3 - (a = b + 1);
// alert( a ); // 3
// alert( c ); // 0

// Chaining Assignments
// let a, b, c;
// a = b = c = 2 + 2;
// alert( a ); // 4
// alert( b ); // 4
// alert( c ); // 4
// Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated 
// and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

// Increment and Decrement
// let counter = 2;
// counter++;        // works the same as counter = counter + 1, but is shorter
// alert( counter ); // 3

// let counter = 2;
// counter--;        // works the same as counter = counter - 1, but is shorter
// alert( counter ); // 1

// The operators ++ and -- can be placed either before or after a variable.
// When the operator goes after the variable, it is in “postfix form”: counter++.
// The “prefix form” is when the operator goes before the variable: ++counter.
// Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. 
// The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

// let counter = 1;
// let a = ++counter; // (*)
// alert(a); // 2
// In the line (*), the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.


// Now, let’s use the postfix form:
// let counter = 1;
// let a = counter++; // (*) changed ++counter to counter++
// alert(a); // 1
// In the line (*), the postfix form counter++ also increments counter but returns the old value (prior to increment). 
// So, the alert shows 1.

// Bitwise Operator
// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )




// 2.9 Comparison
// Boolean is the result
// All comparison operators return a boolean value:
// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.
// For example:
// alert( 2 > 1 );  // true (correct)
// alert( 2 == 1 ); // false (wrong)
// alert( 2 != 1 ); // true (correct)

// String Comparison
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
// In other words, strings are compared letter-by-letter.
// For example:
// alert( 'Z' > 'A' ); // true
// alert( 'Glow' > 'Glee' ); // true
// alert( 'Bee' > 'Be' ); // true

// Comparison of different types
// When comparing values of different types, JavaScript converts the values to numbers.
// For example:
// alert( '2' > 1 ); // true, string '2' becomes a number 2
// alert( '01' == 1 ); // true, string '01' becomes a number 1

// For boolean values, true becomes 1 and false becomes 0.
// For example:
// alert( true == 1 ); // true
// alert( false == 0 ); // true

// Comparison with null and undefined
// There’s a non-intuitive behavior when null or undefined are compared to other values.

// For a strict equality check ===
// These values are different, because each of them is a different type.
// alert( null === undefined ); // false

// For a non-strict check ==
// There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.
// alert( null == undefined ); // true




// 2.10 Conditional Branching:if, ?

// If statement
// let year = prompt('In which year was ECMAScript-2015 specification published?', '');
// if (year == 2015) {
// alert( 'You are right!' );
// }

// The “else” clause
// The if statement may contain an optional else block. It executes when the condition is falsy.
// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
// if (year == 2015) {
//   alert( 'You guessed it right!' );
// } else {
//   alert( 'How can you be so wrong?' ); // any value except 2015
// }

// Several conditions: “else if”
// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
// if (year < 2015) {
//   alert( 'Too early...' );
// } else if (year > 2015) {
//   alert( 'Too late' );
// } else {
//   alert( 'Exactly!' );
// }

// Conditional operator ‘?’
// let accessAllowed;
// let age = prompt('How old are you?', '');
// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }
// alert(accessAllowed);

// Ternary Operator
// let result = condition ? value1 : value2;
// let accessAllowed = (age > 18) ? true : false;

// Multiple
// let age = prompt('age?', 18);
// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';
// alert( message );




// 2:11 Logical Operators

// || (OR)
// The “OR” operator is represented with two vertical line symbols:
// result = a || b;
// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false
// let hour = 9;
// if (hour < 10 || hour > 18) {
//   alert( 'The office is closed.' );
// }

// && (AND)
// The AND operator is represented with two ampersands &&:
// result = a && b;
// In classical programming, AND returns true if both operands are truthy and false otherwise:
// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false
// let hour = 12;
// let minute = 30;
// if (hour == 12 && minute == 30) {
//   alert( 'The time is 12:30' );
// }
// if (1 && 0) { // evaluated as true && false
//   alert( "won't work, because the result is falsy" );
// }

// ! (Logical NOT)
// The ! operator converts a value to boolean and returns its negation.
// Example:
// let value = "Hello";
// let result = !value;
// console.log(result); // Output: false




// 2.12 Nullish coalescing operator '??'
// Nullish Coalescing Operator (??): Returns the right-hand operand when the left-hand operand is null
// or undefined; otherwise, returns the left-hand operand.
// let a = null;
// let b = 'default';
// console.log(a ?? b); // Output: 'default'
// a = 0;
// console.log(a ?? b); // Output: 0 (since 0 is neither null nor undefined)




// 2.13 Loop
// While Loop
// Syntax: 
// while (condition) {
//      // code 
//      }
// Executes the loop body while the condition is truthy.
// Example:
// let i = 0;
// while (i < 3) {
//   alert(i);
//   i++;
// }

// do...while Loop
// Syntax: 
// do { 
//     // loop body 
//     } while (condition);

// Executes the loop body at least once, then checks the condition.
// Example:
// let i = 0;
// do {
//   alert(i);
//   i++;
// } while (i < 3);

// for Loop:
// Syntax: for (begin; condition; step) { // code }
// Combines initialization, condition check, and step update in one line.
// Example:
// for (let i = 0; i < 3; i++) {
//   alert(i);
// }

// Break and Continue
// Print numbers from 0 to 5, but stop if the number is 3
// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//       break; // Exit the loop when i equals 3
//     }
//     console.log(i); // Outputs: 0, 1, 2
//   }

// Print numbers from 0 to 5, but skip the number 3
// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//       continue; // Skip the current iteration when i equals 3
//     }
//     console.log(i); // Outputs: 0, 1, 2, 4, 5
//   }
  


// 2.14 Switch Case
// let day = 2; // Assume days of the week are numbered from 0 (Sunday) to 6 (Saturday)cls
// switch (day) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid day"); // Runs if the value of `day` doesn't match any case
// }




// 2.15 Function
// A JavaScript function is a block of code designed to perform a particular task.

// Example: Function declaration and call
// function showMessage() {
//     alert( 'Hello everyone!' );
//   }
// showMessage()

// Local Variable
// A variable declared inside a function is only visible inside that function.

// Example
// function showMessage() {
//     let message = "Hello, I'm Mandhoj!"; // local variable
  
//     alert( message );
//   } 
//   showMessage(); // Hello, I'm Mandhoj!
// alert( message ); // it shows an error because the variable is local to the function

// Outer Variable
// A function can access an outer variable

// Example:
// let userName = 'Sammar';
// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }
// showMessage(); // Hello, Sammar

// Example:
// let userName = 'John';
// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable
//   let message = 'Hello, ' + userName;
//   alert(message);
// }
// alert( userName ); // John before the function call
// showMessage();
// alert( userName ); // Bob, the value was modified by the function

// The outer variable is only used if there’s no local one.
// If a same-named variable is declared inside the function then it shadows the outer one.

// Example:
// let userName = 'John';
// function showMessage() {
//   let userName = "Bob"; // declare a local variable
//   let message = 'Hello, ' + userName; // Bob
//   alert(message);
// }
// // the function will create and use its own userName
// showMessage();
// alert( userName ); // John, unchanged, the function did not access the outer variable

// Paramter
// We can pass arbitrary data to functions using parameters.
// Example:
// function showMessage(name, greeting) {
//     alert(name + '! ' + greeting);
// }
// showMessage('Sammar', 'How are you?');

// Example
// function showMessage(from, text) {
//     from = '*' + from + '*'; // make "from" look nicer
//     alert( from + ': ' + text );
//   }
//   let from = "Ann";
//   showMessage(from, "Hello"); // *Ann*: Hello
//   // the value of "from" is the same, the function modified a local copy
//   alert( from ); // Ann

// Alternative Default Value
// Modern JavaScript engines support the nullish coalescing operator ??, 
// it’s better when most falsy values, such as 0, should be considered “normal”:

// Example
// function showCount(count) {
//     // if count is undefined or null, show "unknown"
//     alert(count ?? "unknown");
//   }
//   showCount(0); // 0
//   showCount(null); // unknown
//   showCount(); // unknown

// Return a value 
// function sum(a, b) {
//     return a + b;
//   }
//   let result = sum(1, 2);
//   alert( result ); // 3




// 2.16 Function Expression
// In JavaScript, a function expression is a way to define a function using an expression, as opposed to a function declaration.
// Function expressions can be anonymous or named and are often used to assign a function to a variable or pass it as an argument to another function.
//  Function Expressions have a semicolon ; at the end

// Example:
// Anonymous function expression
// const greet = function() {
//     console.log("Hello, world!");
// };
// Calling the function
// greet();  // Output: Hello, world!

// Function is a value
// Example:
// function sayHi() {
//     alert( "Hello" );
//   }
  
//   alert( sayHi ); // shows the function code

// Example
// function sayHi() {
//     alert( "Hello" );
//   }
//   alert( sayHi ); // shows the function code

// Example
// We can copy a function to another variable:
// function sayHi() {   // (1) create
//     alert( "Hello" );
//   }
//   let func = sayHi;    // (2) copy
//   func(); // Hello     // (3) run the copy (it works)!
//   sayHi(); // Hello

// Callback Functions
// A callback function is a function that is passed into another function as
// an argument and is executed after some operation has been completed.
  
// Example
// function doSomething(callback){
//     console.log("Doing Something");

//     setTimeout(function(){
//         console.log("Operation completed");
//         callback();
//     }, 2000);
// }

// function onComplete(){
//     console.log("Callback function executed!");
// }

// // Passing the onComplete function as a callback to doSomething
// doSomething(onComplete);

// Example
// function greet(name, callback) {
//     console.log("Hello, " + name + "!");
//     callback();
// }
// function sayGoodbye() {
//     console.log("Goodbye!");
// }
// // Call the greet function, passing in sayGoodbye as the callback
// greet("Alice", sayGoodbye);




// 2.17 Arrow Functions
// An arrow function is a concise way to write functions in JavaScript.

// Syntax
// let func = (arg1, arg2, ..., argN) => expression;

// Example
// let sum = (a, b) => a + b;
// alert( sum(1, 2) ); // 3

// MultiLine Arrow Functions
// let sum = (a, b) => {  // the curly brace opens a multiline function
//     let result = a + b;
//     return result; // if we use curly braces, then we need an explicit "return"
//   };
//   alert( sum(1, 2) ); // 3




/*..............................................................................OBJECTS:THE BASIC.............................................................*/
// 4.1 Objects
// objects are used to store keyed collections of various data and more complex entities

// An empty object (“empty cabinet”) can be created using one of two syntaxes:
// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

// Literals and properties
// We can immediately put some properties into {...} as “key: value” pairs:
// Example:
// let user = {     // an object
//     name: "John",  // by key "name" store value "John"
//     age: 30        // by key "age" store value 30
//   };

// Property values are accessible using the dot notation:
// alert( user.name ); // John
// alert( user.age ); // 30

// To remove a property, we can use the delete operator:
// delete user.age;

// We can also use multiword property names, but then they must be quoted:
// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true  // multiword property name must be quoted
// };

// The last property in the list may end with a comma:
// let user = {
//   name: "John",
//   age: 30,
// }

// The last property in the list may end with a comma:
// let user = {
//   name: "John",
//   age: 30,
// }

// Example:
//let user = {};
// set
// user["likes birds"] = true;
// get
//alert(user["likes birds"]); // true
// delete
// delete user["likes birds"];

// Example:
// let user = {
//     name: "John",
//     age: 30
//   };
//   let key = prompt("What do you want to know about the user?", "name");
//   // access by variable
//   alert( user[key] ); // John (if enter "name")

// Computed properties
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.
// Example:
// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
// [fruit]: 5, // the name of the property is taken from the variable fruit
// };
// alert( bag.apple ); // 5 if fruit="apple"

// Property value shorthand
// In real code, we often use existing variables as values for property names.
// For instance:
// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // ...other properties
//   };
// }
// let user = makeUser("John", 30);
// alert(user.name); // John

// In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.
// Instead of name:name we can just write name, like this:

// function makeUser(name, age) {
//   return {
//     name, // same as name: name
//     age,  // same as age: age
//     // ...
//   };
// }

// We can use both normal properties and shorthands in the same object:
// let user = {
//   name,  // same as name:name
//   age: 30
// };

// Property names limitations
// As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
// But for an object property, there’s no such restriction:

// Example:
// these properties are all right
// let obj = {
//   for: 1,
//   let: 2,
//   return: 3
// };

// alert( obj.for + obj.let + obj.return );  // 6

// Property existence test, “in” operator
// A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property.
// There will be no error if the property doesn’t exist!
// Reading a non-existing property just returns undefined. So we can easily test whether the property exists:

// Example
// let user = {};
// alert( user.noSuchProperty === undefined ); // true means "no such property"

// There’s also a special operator "in" for that.
// The syntax is:
// "key" in object

// For instance:
// let user = { name: "John", age: 30 };
// alert( "age" in user ); // true, user.age exists
// alert( "blabla" in user ); // false, user.blabla doesn't exist

// Please note that on the left side of in there must be a property name. That’s usually a quoted string.
// If we omit quotes, that means a variable should contain the actual name to be tested. For instance:

// let user = { age: 30 };
// let key = "age";
// alert( key in user ); // true, property "age" exists

// The "for..in" loop
// To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.

// For Syntax:
// for (key in object) {
//     // executes the body for each key among object properties
//   }

// Example:
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let key in user) {
//     // keys
//     alert( key );  // name, age, isAdmin
//     // values for the keys
//     alert( user[key] ); // John, 30, true
//   }

// // Math.trunc is a built-in function that removes the decimal part
// alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
// alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
// alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property



 
// 4.2 Object references and copying
// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, 
// whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

// Let’s start with a primitive, such as a string.
// Here we put a copy of message into phrase:
// let message = "Hello!";
// let phrase = message;
// As a result we have two independent variables, each one storing the string "Hello!".

// Objects are not like that.
// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
// Let’s look at an example of such a variable:
// let user = {
//   name: "John"
// };
// let admin = user // copy the reference

// We can use either variable to access the object and modify its contents:
// let user = { name: 'John' };
// let admin = user;
// admin.name = 'Pete'; // changed by the "admin" reference
// alert(user.name); // 'Pete', changes are seen from the "user" reference

// Comparison by reference
// Two objects are equal only if they are the same object.
// Example
// let a = {};
// let b = a; // copy the reference
// alert( a == b ); // true, both variables reference the same object
// alert( a === b ); // true

// And here two independent objects are not equal, even though they look alike (both are empty):
// let a = {};
// let b = {}; // two independent objects
// alert( a == b ); // false

// Const objects can be modified
// An important side effect of storing objects as references is that an object declared as const can be modified.
// For instance:
// const user = {
//   name: "John"
// };
// user.name = "Pete"; // (*)
// alert(user.name); // Pete
//  The value of user is constant, it must always reference the same object, but properties of that object are free to change.

// Cloning and merging, Object.assign
// So, copying an object variable creates one more reference to the same object.
// But what if we need to duplicate an object?
// We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.
// Like this:
// let user = {
//     name: "John",
//     age: 30
//   };
//   let clone = {}; // the new empty object
//   // let's copy all user properties into it
//   for (let key in user) {
//     clone[key] = user[key];
//   }
//   // now clone is a fully independent object with the same content
//   clone.name = "Pete"; // changed the data in it
//   alert( user.name ); // still John in the original object

// We can also use the method Object.assign.
// The syntax is:
// Object.assign(dest, ...sources)
// The first argument dest is a target object.
// Further arguments is a list of source objects.
// It copies the properties of all source objects into the target dest, and then returns it as the result.

// For example, we have user object, let’s add a couple of permissions to it:
// let user = { name: "John" };
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);
// // now user = { name: "John", canView: true, canEdit: true }
// alert(user.name); // John
// alert(user.canView); // true
// alert(user.canEdit); // true

// If the copied property name already exists, it gets overwritten:
// let user = { name: "John" };
// Object.assign(user, { name: "Pete" });
// alert(user.name); // now user = { name: "Pete" }




// 4.4 Object Methods, "this"
// Objects are usually created to represent entities of the real world, like users, orders and so on:
// Example:
// let user = {
//   name: "John",
//   age: 30
// };

// Method examples
// For a start, let’s teach the user to say hello:
// let user = {
//   name: "John",
//   age: 30
// };
// user.sayHi = function() {
//   alert("Hello!");
// };
// user.sayHi(); // Hello!

// we could also use a pre-declared function as a method, like this:
// let user = {
//   // ...
// };
// // first, declare
// function sayHi() {
//   alert("Hello!");
// }
// // then add as a method
// user.sayHi = sayHi;
// user.sayHi(); // Hello!

// “this” in methods
// It’s common that an object method needs to access the information stored in the object to do its job.
// For instance, the code inside user.sayHi() may need the name of the user.
// To access the object, a method can use the this keyword.
// The value of this is the object “before dot”, the one used to call the method.

// For instance:
// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     // "this" is the "current object"
//     alert(this.name);
//   }

// };

// user.sayHi(); // John

// Arrow functions have no “this”
// Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

// For instance, here arrow() uses this from the outer user.sayHi() method:
// let user = {
//   firstName: "Ilya",
//   sayHi() {
//     let arrow = () => alert(this.firstName);
//     arrow();
//   }
// };
// user.sayHi(); // Ilya

// Summary
// Functions that are stored in object properties are called “methods”.
// Methods allow objects to “act” like object.doSomething().
// Methods can reference the object as this.
// The value of this is defined at run-time.

// When a function is declared, it may use this, but that this has no value until the function is called.
// A function can be copied between objects.
// When a function is called in the “method” syntax: object.method(), the value of this during the call is object.




// CLOSURE IN JAVASCRIPT
// Closure simply means the function with its lexical enironment

// Example1:
// function init(){
//     var name = "Mandhoj";
//     function displayName(){
//         console.log(name);
//     }
//     displayName();
// }
// init();

// Example2:
// function init(){
//     var name = "Mandhoj";
//     function displayName(){
//         console.log(name);
//     }
//     name = "Sammar";
//     return displayName;
// }
// let c = init();
// c()

// Example3:
// function returnFunc() {
//     const x = () => {
//         let a = 1;
//         console.log(a);
//     };

//     const y = () => {
//         let a = 2;
//         console.log(a);
//     };

//     const z = () => {
//         let a = 3;
//         console.log(a);
//     };

//     // Return a function that calls x, y, and z in sequence
//     return () => {
//         x();
//         y();
//         z();
//     };
// }

// // Call 'returnFunc' which returns a function
// let mandhoj = returnFunc();

// // Call the returned function to execute x, y, and z
// mandhoj();




// PROMISE

// Here’s an example of a promise constructor and a simple executor function with “producing code” that takes time (via setTimeout):
// let promise = new Promise(function(resolve, reject) {
//   // the function is executed automatically when the promise is constructed

//   // after 1 second signal that the job is done with the result "done"
//   setTimeout(() => resolve("done"), 1000);
// });

// And now an example of the executor rejecting the promise with an error:
// let promise = new Promise(function(resolve, reject) {
//   // after 1 second signal that the job is finished with an error
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// There can be only a single result or an error
// The executor should call only one resolve or one reject. Any state change is final.
// All further calls of resolve and reject are ignored:
// let promise = new Promise(function(resolve, reject) {
//   resolve("done");

//   reject(new Error("…")); // ignored
//   setTimeout(() => resolve("…")); // ignored
// });

// .then method

// For instance, here’s a reaction to a successfully resolved promise:
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve("done!"), 1000);
// });

// // resolve runs the first function in .then
// promise.then(
//   result => alert(result), // shows "done!" after 1 second
//   error => alert(error) // doesn't run
// );

// And in the case of a rejection, the second one:
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// // reject runs the second function in .then
// promise.then(
//   result => alert(result), // doesn't run
//   error => alert(error) // shows "Error: Whoops!" after 1 second
// );

// .catch method
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });
  
//   // .catch(f) is the same as promise.then(null, f)
//   promise.catch(alert); // shows "Error: Whoops!" after 1 second

// Simple Example:
// let promise = new Promise(function(resolve, reject){
//     alert("I am promise");
//     // resolve(123);
// })
// console.log("Hello mandhoj");
// setTimeout(function(){
//     console.log("Sorry for being two minute late")
// }, 2000)
// console.log("My name is" + "Mandhoj");
// console.log(promise);

// Example2:
// let p1 = new Promise(function(resolve, reject){
//     console.log("Promise is pending");
//     setTimeout(()=>{
//         console.log("I am promise and i am resolved");
//         resolve(true);
//     }, 5000);
// })

// let p2 = new Promise(function(resolve, reject){
//     console.log("Promise is pending");
//     setTimeout(() => {
//         console.log("I am promise and i am being rejected");
//         reject(new Error("I am an error"));
//     }, 5000);
// })

// p1.then((value)=>{
//     console.log(value)
// })

// p2.catch((error)=>{
//     console.log("Some error occured in p2")
// })

// console.log(p1);
// console.log(p2);




// CLASS AND OBJECTS
// Example1:
// class RailwayForm{
//     submit(){
//         alert("Form is submitted");
//     }

//     cancel(){
//         alert("Form is being cancel");
//     }
// }

// //Creating a instance of RailwayForm class
// let MandhojForm = new RailwayForm();
// let SammarForm = new RailwayForm();

// MandhojForm.submit();
// SammarForm.cancel();

// Example2:
// class RailwayForm{
//     submit(){
//         alert("Form is submitted");
//     }

//     cancel(){
//         alert(this.name + "Form is being cancel");
//     }

//     fill(fillname){
//         this.name = fillname;
//     }
// }

// //Creating a instance of RailwayForm class
// let MandhojForm = new RailwayForm();
// MandhojForm.fill("Mandhoj")

// let SammarForm = new RailwayForm();
// SammarForm.fill("Sammar");

// MandhojForm.submit();
// SammarForm.cancel();




// CONSTRUCTOR
// A constructor is a special method in a class that is automatically called when a new instance (or object) of that class is created

//Example1:
// class RailwayForm {
//     constructor(){
//         console.log("Constrcutor is being called");
//     }

//     submit() {
//         alert("Form is being submitted");
//     }

//     cancel() {
//         alert("Form is being cancelled");
//     }
// }

// let mandhoj = new RailwayForm();
// let sammar = new RailwayForm();
// let surbhi = new RailwayForm();
// mandhoj.submit();
// sammar.submit();
// sammar.cancel();
// surbhi.submit();

// Example2:
class RailwayForm {
    constructor(fillname){
        console.log("Constrcutor is being called");
        this.name = fillname;
    }

    submit() {
        alert(this.name + ": Form is being submitted");
    }

    cancel() {
        alert(this.name + ": Form is being cancel");
    }
}

let mandhoj = new RailwayForm("Mandhoj");
let sammar = new RailwayForm("Sammar");
let surbhi = new RailwayForm("Surbhi");
mandhoj.submit();
sammar.submit();
sammar.cancel();
surbhi.submit();



