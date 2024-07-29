const name = "faraz";
let city = "lahore"; // has global scope and easily accessible
var country = "pakistan"; // Better not to use var keyword due to malfunction in scope and function block
age = 16;
let caste; // if no value defined then the output is undefined value

// name = "subhan";
city = "lahori";
var country = "UK";
age = 21;

console.log(name);
console.table([name, city, country, age, caste]);
