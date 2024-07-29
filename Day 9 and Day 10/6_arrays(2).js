// const arr = [1, 2, 3, 4];
// const arr1 = [5, 6, 7, 8];

arr.push(arr1); // it takes arr1 as it's 4th index value
console.log(arr);

// this can be fixed using concat
const arr = [1, 2, 3, 4];
const arr1 = [5, 6, 7, 8];
// const newArr = arr.concat(arr1);
// console.log(newArr);

// better to use spread "..." rather than concat
const spreadArr = [...arr, ...arr1];
console.log(spreadArr);

// what if we have arrays inside arrays
const flatArr = [1, 2, 3, 4, [5, 6, 7], [8, 9, [10, 11, 12]]];
console.log(flatArr.flat(Infinity)); // flat will spread all values in it

console.log(Array.isArray("flatArr1"));
console.log(Array.isArray([1, 2, 3, 4]));
console.log(Array.from("faraz")); // to convert this into array
console.log(Array.from({ name: "faraz" })); // it will give empty array bcz it can't convert them directly wwe have to pass them whether convert from values or keys

// converting different declared values into array
let age = 21;
let age1 = 21;
let age2 = 21;

console.log(Array.of(age, age1, age2));
