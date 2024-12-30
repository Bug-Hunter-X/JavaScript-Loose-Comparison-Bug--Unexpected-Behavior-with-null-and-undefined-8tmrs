function foo(x) {
  if (x === null) {
    return 0;
  }
  return x + 1;
}
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: NaN (This remains because undefined + 1 is still NaN)
//To Handle undefined as well
function foo1(x) {
  if (x === null || x === undefined) {
    return 0;
  }
  return x + 1;
}
console.log(foo1(null)); // Output: 0
console.log(foo1(undefined)); // Output: 0