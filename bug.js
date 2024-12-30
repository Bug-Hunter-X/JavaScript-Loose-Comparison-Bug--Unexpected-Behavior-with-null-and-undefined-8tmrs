function foo(x){
  if (x == null) {
    return 0; //This is the bug, should be x===null
  }
  return x+1;
}
console.log(foo(null)); // Output: 1, should be 0
console.log(foo(undefined)); //Output: NaN, should be 0