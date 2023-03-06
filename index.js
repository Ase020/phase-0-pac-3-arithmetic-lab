// add() function
function add(a, b) {
   return a + b;
}
add(1, 2);

// subtract() function
function subtract(a, b) {
   return a - b;
}
subtract(10, 5);

// multiply() function
function multiply(a, b) {
   return a * b;
}
multiply(10, 2);

// divide() function
function divide(a, b) {
   return a / b;
}
divide(27, 3);

// increment(n) increments n and returns the result
function increment(n) {
   return (n += 1);
}
increment(10);

// decrement(n) decrements n and returns the result
function decrement(n) {
   return (n -= 1);
}
decrement(8);

// makeInt(n)
// parses n as an integer and returns the parsed integer
function makeInt(n) {
   return parseInt(n, 10);
}
makeInt("4");
makeInt("number");

// preserveDecimal(n)
// preserves n's decimals (it parses n as a floating point number) and returns the parsed number
function preserveDecimal(n) {
   return parseFloat(n);
}
preserveDecimal("3.14159265359");
preserveDecimal("pi");
