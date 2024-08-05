if (true) {
  let a = 10;
  const b = 20;
  var c = 30; // that's why var has malfunction error while using in scope i.e. let and const can't be accessed on the other hard var is easily accessible even it is not returned
}

console.log(a);
console.log(b);
console.log(c);

// global scope in broswer and console is different

function one() {
  const user = "faraz";

  function two() {
    const user1 = "farazamir";
    console.log(user); // it is also called closure in which child func can access parent func
  }

  //   console.log(user1);
  two();
}

one();

if (true) {
  const user = "faraz";
  if (user) {
    const user1 = " amir";
    console.log(user + user1);
  }
  //   console.log(user1);
}

// console.log(user);

function addOne(n) {
  return n + 1;
}

addOne(5); // what if we declare it above the function it will execute without giving an error

const addTwo = function (n) {
  // function can also be written as by holding the function in a variable
  return n + 1;
};
addTwo(5); // but if we hold it in a variable and then call it above function scope it will give error ( it is a concept of hoisting in JS that hw JS deal variables and it's execution context)

// Global Scope
//    - Variables declared outside any function or block have global scope.
//    - These variables can be accessed from anywhere in the code.
var globalVar = "I'm global";

function test() {
  console.log(globalVar); // Accessible
}

console.log(globalVar); // Accessible

//     Function Scope
//    - Variables declared inside a function are in the function scope.
//    - These variables are accessible only within the function.
function myFunction() {
  var functionVar = "I'm inside a function";
  console.log(functionVar); // Accessible
}

console.log(functionVar); // Error: functionVar is not defined

//      Block Scope
//    - Variables declared with `let` or `const` inside a block (denoted by curly braces `{}`) have block scope.
//    - These variables are accessible only within the block.

{
  let blockVar = "I'm inside a block";
  const blockConst = "I'm also inside a block";
  console.log(blockVar); // Accessible
  console.log(blockConst); // Accessible
}

console.log(blockVar); // Error: blockVar is not defined
console.log(blockConst); // Error: blockConst is not defined

//     Module Scope
//    - Variables declared inside a module (a separate file or an ES6 module) are in the module scope.
//    - These variables are accessible only within the module unless explicitly exported and imported.

import { moduleVar } from "./15_functions";
console.log(moduleVar); // Accessible because it is imported

//     Lexical Scope i.e. closures
//    - Lexical scoping means that a function's scope is determined by its physical location in the source code.
//    - Functions can access variables from their parent scopes, even after the parent function has closed.

function outerFunction() {
  let outerVar = "I'm outside";

  function innerFunction() {
    console.log(outerVar); // Accessible due to lexical scoping
  }

  innerFunction();
}

outerFunction();
