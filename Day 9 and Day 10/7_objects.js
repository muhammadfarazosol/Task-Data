// Objects can be declared in two ways literals and constructor
// when we declare by constructor "singleton" is created
// Object.create // this is constructor method in which singleton is created

// object literals

// imp note : we can't access symbols directly for that we have to declare them first

const mySym = Symbol("key1");

const user = {
  name: "faraz",
  mySym: "mykey1", // it's wrong way to access or declare symbol bcz it will take it as string to access it as a symbol use
  [mySym]: "mykey1", // to refer a symbol use sqr brackets
  age: 21,
  email: "faraz@gmail.com",
  city: "lahore",
  country: "Pakistan",
};

console.log(user.email);
console.log(user["city"]); // this is more peferable while printing i.e. esing square bracket and qouted in ""
console.log(user[mySym]); // to access symbol no need to qoute them in ""

// changing value
user.name = "farazamir";
console.log(user);

//freezing value so that no one can change that object
// Object.freeze(user);

// now let's again try to change values
user.name = "bossfaraz";
console.log(user);

user.greetings = function () {
  return "Hello World";
};

user.greetings1 = function () {
  return `Hello ${this.name}`;
};

console.log(user.greetings());
console.log(user.greetings1());
