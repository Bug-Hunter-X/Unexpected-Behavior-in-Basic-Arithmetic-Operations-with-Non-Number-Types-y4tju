# Unexpected Behavior in Basic Arithmetic Operations with Non-Number Types

This repository demonstrates an uncommon bug in JavaScript related to unexpected behavior in basic arithmetic operations when non-number types are used as inputs.  The functions don't handle type checking effectively, leading to unexpected string concatenation instead of the expected arithmetic operations.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version with improved type handling.

## Bug Description:

The provided JavaScript code defines functions for basic arithmetic operations: addition, subtraction, multiplication, and division. However, when non-numeric types are passed as arguments, the functions produce unexpected results due to JavaScript's loose typing and implicit type coercion.  This can be problematic for applications requiring precise arithmetic operations.

## Solution:

The solution involves adding explicit type checking and handling for non-numeric inputs.  The improved code in `bugSolution.js` validates inputs before performing calculations, ensuring that the functions behave as expected with all data types.