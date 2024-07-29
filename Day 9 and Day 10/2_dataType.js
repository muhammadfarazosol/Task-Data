// Data types
// number
// BigInt
// string
// boolean
// symbol
// null
// undefined

// Object
// console.log(null); // it reutrn null
// console.log(undefined); // it return same undefined

name4 = "faraz";
name5 = 3n;

console.log(typeof name4);
console.log(typeof name5);

let name1 = Symbol("faraz");
let name2 = Symbol("faraz");
let name3 = Symbol("faraz");
if ((name1 == name2) == name3) {
  console.log("true");
} else {
  console.log("false");
}
