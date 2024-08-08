// Does JS really have JS
// yes, bcz it is a prototype based language which means it is primarily syntactic sugar i.e. you have been provided with syntax that one coming from c++ or java do not feel miss out
// it is simply dependant on you that how one will use class based approach or functional approach

class Car {
  constructor(color) {
    this.color = color;
  }
  drive() {
    console.log("driving");
  }
}

// console.dir(Car); // run in browser
console.log(typeof Car); // here what we get is class so it means that classes are nothing but functions

// let's create object of class

let redCar = new Car("red");
console.log(redCar);

// classes extends concept

class Mammal {
  constructor(_legs, _name = "elephant") {
    this.legs = _legs;
    this.name = _name;
    this.warmBlood = true;
  }
  walk() {
    return `${this.name} is walking`;
  }
}

class Bat extends Mammal {
  constructor(_legs, _name, _eatsMeat) {
    super(_legs, _name);
    this.eatsMeat = _eatsMeat;
  }

  fly() {
    return `${this.name} is flying`;
  }
  walk() {
    let holding = this.eatsMeat ? "bug" : "carrot";
    return `${super.walk()} with a ${holding}`;
  }
}

let fruitBat = new Bat(4, "bat", false);
console.log(fruitBat);
console.log(fruitBat.walk());

// what if we have multiple arguments then we can clean up the code via this tricks

class Alphabets {
  constructor(a, b, c, d, e) {
    // if we don't call constructor here it will create empty constructor itself
    Object.assign(this, { a, b, c, d, e }); // this will act as this.a = _a and so on
  }
}

class MoreAlphabets extends Alphabets {
  constructor(f, ...args) {
    // it will occupy all the arguments from the alphabets class if we want to add more then we have to add it in front
    super(...args); // it is imp to call super in base class and also to create constructor
    this.f = f;
  }
}

const newAplhabets = new MoreAlphabets(6, 1, 2, 3, 4, 5);
console.log(newAplhabets);

// static and instance method in classes
class Staticclass {
  static price() {
    console.log("Static Func");
  }

  discount() {
    console.log("Instance Func i.e. will be called by creating object");
  }
}

Staticclass.price(); // it is showed direct in class
const obj = new Staticclass();
obj.discount(); // it is showed in prototype when we run console.dir()
