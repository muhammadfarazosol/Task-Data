// -> Objects Destructure

// objects constructor i.e. making it singleton

const name = new Object(); // it is singleton
const name1 = {}; // it is non-singleton but give same results

name.id = "amirfaraz07";
name.age = 21;
name.isLoggined = true;

// console.log(name);

// lets make some nested objects now

const username = {
  fullName: {
    userFullName: {
      firstName: "faraz",
      lastName: "amir",
    },
  },
};

// console.log(username.fullName1?.firstName); // "?" is usually used to avoid error it check whether it is available or null or empty and gives output of undefined or null rather than giving errors
// console.log(username.fullName.userFullName.firstName);

// concatenate multiple objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };
// console.log(obj1, obj2, obj3); // same array like problem it take it as 0 1 2 index
// const obj4 = Object.assign(obj1, obj2, obj3) // here it take obj1 as target object and other two as source object
// const obj4 = Object.assign({}, obj1, obj2, obj3) // it is better to use {} because then it take {} brackets as a target object and source other objects into it
// best way to use it spread operator just like in arrays and we will be using it 90% of the time
const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

// in database data is stored in arrays having objects

const users = [
  {
    email: "faraz.com",
    age: 21,
  },
  {
    email: "amir.com",
    age: 21,
  },
];

// console.log(users[1]);

// some important methods
// console.log(Object.keys(users)); // return only keys in arrays
// console.log(Object.values(users[1]));
// console.log(Object.entries(name)); // Returns an array of key/values of the enumerable properties of an object
// console.log(name.hasOwnProperty('isLoggined')); // to check whether it has this property or not

// **** Destructuring objects ****

const course = {
  courseName: "JS",
  timeDuration: "9 hours",
  instructor: "faraz",
};

console.log(course.courseName);
// one more method is to access them which is more effecient
const { courseName } = course;
console.log(courseName); // now we can directly access the courseName

// Creating Object Alias
const { timeDuration: time } = course; // let timeDuration is kinda big keyword so we can use short name by giving it new name like in this example
console.log(time);

// -> Arrays Destructure
// Just like we did in Objects same can also be done in Arrays
const num1 = [10, 20, 30, 40];
const num2 = [50, 60, 70, 80];
console.log([...num1, ...num2]);

const [a, b, ...rest] = num1;
console.log(a, b, rest);

const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// let { [0]: fruit1, [1]: fruit2 } = fruits;
// console.log(fruit1, fruit2);

// Skipping values while destructuring
let [fruits1, , , fruits2] = fruits;
console.log(fruits1, fruits2);

// Destructuring string
let name = "W3Schools";
let [a1, a2, a3, a4, a5] = name;
console.log(a1, a2, a3, a4, a5);
