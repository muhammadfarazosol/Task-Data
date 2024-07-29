const newArr = new Array(1, 2, 3, 4, 5, 6); // just like nmbr and string if run in console we also get prototypes of this
console.log(newArr);
console.log(newArr.indexOf(4));
console.log(newArr.includes(8));

const arr = [1, 2, 3, 4, 5, 6];
const newArr1 = arr.join(); // it converts it into string
console.log(newArr1);
arr.push(7);
arr.push(8);
arr.pop();
arr.unshift(0); // add element in starting
arr.shift(); // remove element from start
console.log(arr);

// ****slice and splice****

const myArray = [1, 2, 3, 4, 5, 6];
console.log("A", myArray);

const sliceArr = myArray.slice(1, 3); // it will print index 1 and 2 value
console.log(sliceArr);

console.log("After slice myArray is", myArray); // after slice original arrray remain same

const spliceArr = myArray.splice(1, 3); // prints index 1 2 3 values
console.log(spliceArr);

console.log("After splice myArray is", myArray); // after splice that section is removed and other elements of arr are printed
