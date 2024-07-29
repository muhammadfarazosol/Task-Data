// we have two type of datatypes like Primitive and Non-Primitive (Refrence) Datatypes it is just like in c++ we have call by value and reference

// 1- Primitive Data Types
// 7 types => number, string, bigInt ( if we have pretty big numbers ), symbol, null, undefined, boolean
let bigNumber = 123343432432423n;
let temp = null;
let id = Symbol("123");
let id1 = Symbol("123");

// Important Note : String is non primitive bcz it is actully array of characters

//now basically we used symbol for difference between both even they have same values passed but symbol is used to create difference btw them
// let verify it

console.log(id == id1); // we get fasle bcz both get different symbols
//console.log(typeof temp); // null typeof gives object (as it's data type)

// 2- Reference (Non-Primitive) Data Types
// types => arrays, objects, functions
// if want to master JS you should have good grip on Objects and Browser events

const arr = [1, 2, 3];
let myObj = {
  // objects are always in curly braces
  name: "faraz",
  age: 21,
  city: "lahore",
};

let myFunc = function () {
  console.log("Non-Primitive all return typeof object");
};

console.log(typeof myFunc); // myFunc returns "function" actually it's full is "function object"

// Is JS static or dynamic language? it is dynamic becasue we can reassign value which is okay in JS but not in other languages e.g. a = 26; a = "abc"; a = true   it didn't give error in JS but in other languages it can giv error

// ****Stack (Primitive) and Heap (Non-Primitive)****
// stack memory give copy of declared object and heap gives reference i.e. the original value is changed

let name = "faraz";
let name1 = name;
name1 = "farazamir";

console.log(name);
console.log(name1);
// name still has faraz but name1 has farazamir so stacked gave me a copy of name1 keeping name original

let user1 = {
  email: "faraz@gmail.com",
};

let user2 = user1;

user2.email = "farazamir@gmail.com";

console.log(user1);
console.log(user2);

// now in heap as ye get original refernce so both emails of user1 and user2 are updated
