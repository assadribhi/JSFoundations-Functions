/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Michael") logs "Hello Michael"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`);
}
greet("Assad");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  if (n % 2 > 0) {
    const res = true;
    return res;
  } else if (n % 2 < 1) {
    const res = false;
    return res;
  }
}
isOdd(1);
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  if (n % 2 > 0) {
    let result = n - 1;
    console.log(result / 2);
    return result / 2;
  } else if (n % 2 < 1) {
    let result = n;
    console.log(result / 2);
    return result / 2;
  }
}
oddsSmallerThan(16);
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if (n % 2 > 0) {
    let result = n * n;
    console.log(result);
    return result;
  } else if (n % 2 < 1) {
    let result = n * 2;
    console.log(result);
    return result;
  }
}
squareOrDouble(9);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
