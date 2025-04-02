function factorial (n) {
  if (n < 0 || typeof n !== "number") {
    return "Invalid input";
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(10));
// 3628800
