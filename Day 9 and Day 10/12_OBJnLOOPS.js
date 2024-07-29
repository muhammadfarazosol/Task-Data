// we have seen that for of loop was not working for objects so we have another loop for it "for in" it is not like that it is specifically for objects it can be used in other situations also

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in obj) {
  console.log(`${key} = ${obj[key]}`);
}

let arr = [1, 2, 3, 4, 5];
for (const key in arr) {
  console.log(`${key} = ${arr[key]}`);
}

// some difference in arrays and object is that arr key start with 0 while obj key can be kept as you want
// in forof loop the key directly give value rather than prinitng key while in forin loop the key prints key only not values so we have to give that key to arr or obj name to get that value

// MAPs => is it iterable on maps? no it is not bcz map is not iterbale for forin loop
