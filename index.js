function add(a, b) {
  return `Addition: The sum of ${a} and ${b} is ${a + b}`;
}

function subtract(a, b) {
  return `Subtraction: The difference between ${a} and ${b} is ${a - b}`;
}

function multiply(a, b) {
  return `Multiplication: The product of ${a} and ${b} is ${a * b}`;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return `Division: The quotient of ${a} and ${b} is ${a / b}`;
}
export const calculator = {
  add,
  subtract,
  multiply,
  divide,
};
