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
//For example:
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

// Nullish coalescing operator '??'
let a = null;
let b = 'default';

console.log(a ?? b); // Output: 'default'

a = 0;
console.log(a ?? b); // Output: 0 (since 0 is neither null nor undefined)
