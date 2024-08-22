// Arrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets.
// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Arrow functions are not hoisted. They must be defined before they are used.
// Using const is safer than using var, because a function expression is always a constant value.
// You can only omit the return keyword and the curly brackets if the function is a single statement.

// Before arrow function
hello = function () {
  return "Hello World!";
};
console.log(hello());
// With arrow function
hello = () => {
  return "Hello World!";
};
console.log(hello());

// if single statement we can omit braces and return keyword
hello = () => "Hello World!";
console.log(hello());

// passing parameters
hello = (val) => `Hello ${val}`;
console.log(hello());

// if one parameter we can remove parenthesis
hello = (val) => `Hello  ${val}`;
console.log(hello());

// Now before talking about arrow function we should be familiar with "this" keyword
// this keyword refer to the current context
// here it refer's to empty object
console.log(this); // {} because it don't have any global context right now

// but in google console it refers to the window's object ( as it is window's global object ) bcz previously JS run in browser but now it act as a standalone someone named it node, etc

// it does not run in functions even there is context given it will give undefined
const user1 = {
  username: "faraz",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user1.welcomeMessage()
// user1.username = "sam"
// user1.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
  let username = "hitesh";
  console.log(this);
};

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

const user = {
  name: "faraz",
  age: 21,
  message: function () {
    // console.log(`Welcome ${this.name}`); // here we used this keyword to refer current context value within scope
    // console.log(this); // inside context it gave whole object and then we override value outside context it changed that and also gave us that specific value as well
  },
};
// user.message()
// user.name = "farazamir"
// user.message()

// console.log(this); // it give empty object i.e. {} here but when we run this in browser console it gives windows objects

// now lets call only this keyword in function and outside execution context

function one() {
  // console.log(this); // it gives many values when run alone of node environment
}
// one()

function two() {
  let name = "faraz";
  // console.log(this.name); // now it give undefined so i see right now it is working in objects not in functions
}
two();

// lets convert it into arrow function
let three = () => {
  let name = "faraz";
  // console.log(this.name);
};
// three()

let four1 = (n1, n2) => {
  return n1 + n2; // it is explicit function in which return is used
};
four1(5, 8);

// lets try implicit return function
let four = (n1, n2) => n1 + n2;
console.log(four(4, 5));

// above one can also be written as ( which is useful in react )

let four2 = (n1, n2) => n1 + n2; // if we use curly braces then return is compulsory but if we use round brackets no need to use return keyword
four2(4, 5);

// what if we want to return objects
// let five = () => {username : "faraz"} // it will give undefined so it should be wrap in brackets
let five = () => ({ username: "faraz" });
console.log(five());
