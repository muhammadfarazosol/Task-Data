import { multiply, divide } from "./exportModules.mjs"; // can be written as this

console.log(multiply(5, 3));
console.log(divide(6, 3));

// also it can work if we want to export all modules then we can use this
import * as math from "./exportModules.mjs";

console.log(math.multiply(5, 3));
console.log(math.divide(6, 3));

// another method to import is dynamically it can be helpful while optimizing performance that it will be only called when it is only needed
function loadModule() {
  import("./exportModules.mjs").then((math) => {
    console.log(math.multiply(5, 3));
    console.log(math.divide(6, 3));
  });
}

loadModule();
