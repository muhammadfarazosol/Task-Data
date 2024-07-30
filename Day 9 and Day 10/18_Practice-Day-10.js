function cartPrice(val1, val2, ...n1) {
  total = val1 + val2;
  for (i of n1) {
    total += i;
  }
  return total;
}

console.log(cartPrice(200, 400, 600, 800));

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");
greet("Bob");

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
console.log(add(10, 20));

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 2));

function createGreeting(greeting) {
  return function (name) {
    console.log(greeting + ", " + name + "!");
  };
}

const sayHello = createGreeting("Hello");
sayHello("Alice");
sayHello("Bob");

var globalVar = "I'm global";

function testScope() {
  var localVar = "I'm local";
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}

testScope();
console.log(globalVar); // Accessible
// console.log(localVar); // Error: localVar is not defined

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = counter();
const counter2 = counter();

counter1(); // 1
counter1(); // 2
counter2(); // 1
counter2(); // 2
counter1(); // 3

// lexical scoping
function outerFunction() {
  let outerVar = "I'm outside";

  function innerFunction() {
    console.log(outerVar); // Accessible due to lexical scoping
  }

  innerFunction();
}

outerFunction();

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
