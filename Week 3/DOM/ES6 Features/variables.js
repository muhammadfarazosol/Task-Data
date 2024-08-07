// -> var (ES5)
// Function-scoped: Variables declared with var are scoped to the function they are declared in.
// Hoisting: var variables are hoisted to the top of their scope and initialized with undefined.
// Re-declaration: You can re-declare var variables within the same scope.

// -> let (ES6)
// Block-scoped: Variables declared with let are scoped to the block they are declared in.
// No Hoisting Initialization: let variables are hoisted but not initialized until their declaration is evaluated.
// No Re-declaration: You cannot re-declare let variables within the same scope.

// -> const (ES6)
// Block-scoped: Variables declared with const are scoped to the block they are declared in.
// No Hoisting Initialization: const variables are hoisted but not initialized until their declaration is evaluated.
// No Re-declaration: You cannot re-declare const variables within the same scope.
// Immutable Binding: The variable binding is immutable, meaning you cannot reassign the variable itself, but the value it holds can be mutable (e.g., objects and arrays).
// Must assign the value i.e. const x; x = 2; not allowed it must be const x = 2; allowed
// It does not define a constant value. It defines a constant reference to a value.

// Because of this we can not:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object

// But you can:

// Change the elements of constant array
// Change the properties of constant object

// var Example
console.log(car);

var car = "audi";

function exampleVar() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x);
  }
  console.log(x);
}

exampleVar();

// let Example
console.log(car);

let car = "audi";
let car = "toyota"; // cannot be redeclare within the same scope

function exampleLet() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
}

exampleLet();

// const Example

console.log(car);

const car = "audi";

function exampleConst() {
  const x = 10;
  if (true) {
    const x = 20;
    console.log(x);
  }
  console.log(x);
}

exampleConst();
