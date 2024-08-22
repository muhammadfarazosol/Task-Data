// Modules are JavaScript files that export specific functionalities (like variables, functions, or classes) and import them in other files where they are needed.
// Helps in keeping your code DRY (Don't Repeat Yourself) by reusing code across different parts of your application.

// there are basically multiple ways to export the modules

export function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// export default { divide };
// module.exports = { divide };
export { divide };
