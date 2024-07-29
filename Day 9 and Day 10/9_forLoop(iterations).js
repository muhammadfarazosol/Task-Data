// For loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log(`5 is best`);
  }
  console.log(element);
}

for (let i = 0; i <= 2; i++) {
  console.log(`inner loop ${i}`);
  for (let j = 0; j <= 2; j++) {
    console.log(`nested loop ${j} and inner loop ${i}`);
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

let arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}

// break and continue
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`5 detected`);
    break;
  }
  console.log(`Value of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`5 detected`);
    continue; // skip this condition and then continue
  }
  console.log(`Value of i is ${i}`);
}
