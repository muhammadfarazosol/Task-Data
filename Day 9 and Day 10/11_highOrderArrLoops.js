// [ "", "", "" ]
// [{}, {}, {}] // arr and obj are very important in JS

// ****for of loop****
let arr = ["a", "b", "c", "d", "e"];
for (const i of arr) {
  // for (const iterator of object) here iterator act as i in for loop and object can be name of your arr or obj
  console.log(i);
}

let greeetings = "Faraz Amir";
for (const greet of greeetings) {
  console.log(`value is ${greet}`);
}

// MAPS => it holds key value pair each value in it is unique and the order also remain in sequence

const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
// what if we repeat any value it will ignore that and will not print that value
map.set("a", 1);
console.log(map);

// now let's print these values separately using for of loop
for (const key of map) {
  console.log(key); // but it is not printing values one by one it printed all array at first
}

// to destructure array for that we use square brackets for key and value pair

for (const [key, value] of map) {
  console.log(key, "=", value);
}

// let's see will it work on objects or not
let obj = {
  A: 1,
  B: 2,
};

for (const [key, value] of obj) {
  console.log(key, "=", value); //obj is not iterable (error) it is iterable we will see this is further series that how
}
