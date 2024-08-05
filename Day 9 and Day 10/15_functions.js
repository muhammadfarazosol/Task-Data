// Functions are very important is JS so along with JS we should have knowledge about memory management

function name() {
  console.log("faraz");
}
name();

function add2nmbrs(n1, n2) {
  // giving parameters
  console.log(n1 + n2);
}

add2nmbrs(2, 3); // giving arguments
// but what if we store this in a variable do we get same result?
const result = add2nmbrs(2, 3); // it gives undefined bcz it is not returning the result
console.log(result);

function add2nmbrs1(n1, n2) {
  // let result1 = n1 + n2
  // return result1   // rather than writing whole this simply return both sums
  return n1 + n2;
  // console.log("faraz"); // in JS after return no value is executed
}
const result1 = add2nmbrs1(2, 3);
console.log(result1);

function loginUser(username) {
  // here we can also give some default value like (username = "faraz")
  if (username === undefined) {
    // here we can also use if(!username) it will also give same results
    console.log("Pls enter username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUser());
console.log(loginUser("faraz"));

// what if we pass one parameter and give multiple arguments it gives only 1st argu not all we can fix this using spread operator (here we say it rest operator)
function cartPrice(val1, val2, ...n1) {
  // now here val1 takes 200 and val2 takes 400 and nums1 take other all
  return val1 + val2 + n1;
}

let y = cartPrice(200, 400, 600, 800);
console.log(y);
console.log(200, 400, 600, 800);

// objects

const user = {
  name: "faraz",
  age: 21,
};
function handleObj(anyOnj) {
  console.log(`My name is ${anyOnj.name} and age is ${anyOnj.age}`);
}

handleObj(user);
// we can also pass object directly
handleObj({
  name: "farazamir",
  age: 21,
});

// arrays
const arr = [100, 200, 300, 400];
function arrReturn(myArr) {
  return myArr;
}
console.log(arrReturn(arr));
// we can also pass array directly
console.log(arrReturn([200, 400, 600, 800]));

export let moduleVar = "I'm inside a module";

// function declaration
function square(num) {
  return num * num;
}

console.log(square(2));
console.log(square(5));

// function expression
const cube = function (num) {
  return num * num * num;
};

console.log(cube(2));
console.log(cube(3));
