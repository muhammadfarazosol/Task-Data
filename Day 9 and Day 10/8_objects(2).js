// objects constructor i.e. making it singleton

const name = new Object(); // it is singleton
const name1 = {}; // it is non-singleton but give same results

name.id = "amirfaraz07";
name.age = 21;
name.isLoggined = true;

console.log(name);

name1.id = "amirfaraz07";
name1.age = 21;
name1.isLoggined = true;

console.log(name1);

// lets make some nested objects now

const username = {
  fullName: {
    userFullName: {
      firstName: "faraz",
      lastName: "amir",
    },
  },
};

console.log(username.fullName1?.firstName); // "?" is usually used to avoid error it check whether it is available or null or empty and gives output of undefined or null rather than giving errors
console.log(username.fullName.userFullName.firstName);

// concatenate multiple objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };
//console.log(obj1, obj2, obj3); // same array like problem it take it as 0 1 2 index
const obj4 = Object.assign(obj1, obj2, obj3); // here it take obj1 as target object and other two as source object
const obj5 = Object.assign({}, obj1, obj2, obj3); // it is better to use {} because then it take {} brackets as a target object and source other objects into it
// best way to use it spread operator just like in arrays and we will be using it 90% of the time
const obj6 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4);
console.log(obj5);
console.log(obj6);

// in database data is stored in arrays having objects

const users = [
  {
    email: "faraz.com",
    age: 21,
  },
  {
    email: "amir.com",
    age: 46,
  },
];

const name4 = new Object(); // it is singleton
name4.id = "amirfaraz07";
name4.age = 21;
name4.isLoggined = true;

console.log(users[1]);

// some important methods
console.log(Object.keys(users)); // return only keys in arrays
console.log(Object.values(users[1]));
console.log(Object.entries(name4)); // Returns an array of key/values of the enumerable properties of an object
console.log(name4.hasOwnProperty("isLoggined")); // to check whether it has this property or not

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
const { timeDuration: time } = course; // let timeDuration is kinda big keyword so we can use short name by giving it new name like in this example
console.log(time);

// **** JSON API ****

// JSON API are in curly braces or sometimes in array format

// {
//     "name" : "faraz",
//     "age" : "21"
// }
// [
//     {},
//     {},
//     {}
// ]
