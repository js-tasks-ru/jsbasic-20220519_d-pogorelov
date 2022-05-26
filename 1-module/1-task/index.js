function factorial(n) {
//  0! = 1, 1! = 1
  if (n > 0 && n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
