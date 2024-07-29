const name = "faraz";
const age = 21;

console.log("Hello" + name + "Age is" + age); // old method
console.log(`Hello ${name} Age is ${age}`); // better to use this method using backticks i.e. JS has string templates this method is called string interpolation

// let decalre variable with new method
const nameNew = new String("faraz-amir"); // if we run this in chrome console we also get prototypes and indexed value of each digit as per object
console.log(nameNew);
// lets try some prototypes
console.log(nameNew[0]);
console.log(nameNew.__proto__); // here it show empty curly braces denoting object but in chrome browser it shows all prototypes
console.log(nameNew.length);
console.log(nameNew.toUpperCase()); // run this in console
console.log(nameNew.charAt(2));
console.log(nameNew.indexOf("r"));

const nameSubstring = nameNew.substring(0, 3); // it give output as 0 1 2
console.log(nameSubstring);

// faraz-amir

const nameSlice = nameNew.slice(-8, 4); // we can also enter -ve value and it will start in reverse
console.log(nameSlice);

const nametrim = "  faraz  ";
console.log(nametrim);
console.log(nametrim.trim()); // to remove extra spaces

const webURL = "faraz.com/faraz%10amir";
console.log(webURL.replace("%10", "-"));
console.log(webURL.includes("faraz")); // to check whether available or not
console.log(webURL.includes("subhan"));
console.log(nameNew.split("-")); // split number into array using any condition
