
//If we list all the natural numbers below 10 that are multiples of or 3 or 5 , we get 3,5,6and 9 . The sum of these multiples is23
//Find the sum of all the multiples of 3 or 5 below 1000.

export function exercise(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
