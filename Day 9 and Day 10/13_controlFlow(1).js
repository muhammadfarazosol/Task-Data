let temp = 50;
if (temp === 51) {
  console.log(`Temp is good`);
} else {
  console.log(`Temp not equal`);
}

// we  can also do it using ternary operator

console.log(temp == 51 ? `Temp is good` : `Temp is not equal`);

let nmbr = 60;
let nmbr1 = 70;
let nmbr2 = 80;
// if(nmbr = 60) console.log(`yes`), // implicit scope, can also write multiple lines by adding coma
// console.log(`Yes yes`);
if (nmbr < 20) {
  console.log(`No`);
} else if (nmbr < 30) {
  console.log(`Nope`);
} else {
  console.log(`Less than 70`);
}

if (nmbr == 60 && nmbr1 == 70 && nmbr2 == 80) {
  console.log(`All yes`);
}

if (nmbr == 60 || nmbr1 == 100) {
  console.log(`All no`);
}
