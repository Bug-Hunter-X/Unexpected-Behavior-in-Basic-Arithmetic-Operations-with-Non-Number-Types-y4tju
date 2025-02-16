function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Unexpected behavior when using non-numbers
console.log(add(10, '5')); // Output: 105 (string concatenation instead of addition)
console.log(add(10, null)); // Output: 10null (string concatenation instead of addition)