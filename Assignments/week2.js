// Given an integer n, print:
// ● n == 'FizzBuzz' if n is divisible by 3 and 5.
// ● n == 'Fizz' if n is divisible by 3.
// ● n == 'Buzz' if n is divisible by 5.
// Example 1:
// Input: n = 3
// Output: “Fizz”
// Example 2:
// Input: n = 5
// Output: “Buzz”

const fizzBuzz = (num) => {
  let output = '';
  if ((num % 3 === 0) && (num % 5 === 0)) output = 'FizzBuzz';
  else if (num % 3 === 0) output = 'Fizz';
  else if (num % 5 === 0) output = 'Buzz';
  else output = 'Please provide a valid input'
  return output;
}
console.log(fizzBuzz(15))
console.log(fizzBuzz(12))
console.log(fizzBuzz(10))
console.log(fizzBuzz(13))
console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
