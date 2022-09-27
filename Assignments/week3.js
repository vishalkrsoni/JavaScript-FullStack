// Given an integer n, return a string array answer (1-indexed) where:
// ● answer[i] == 'FizzBuzz' if i is divisible by 3 and 5.
// ● answer[i] == 'Fizz' if i is divisible by 3.
// ● answer[i] == 'Buzz' if i is divisible by 5.
// ● answer[i] == i (as a string) if none of the above conditions are true.
// Example 1:
// Input: n = 3
// Output: ['1','2','Fizz']
// Example 2:
// Input: n = 5
// Output: ['1','2','Fizz','4','Buzz']
const fizzBuzz = (num) => {
  let output = [];
  for (let i = 1; i <= num; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) output[i - 1] = 'FizzBuzz';
    else if (i % 3 === 0) output[i - 1] = 'Fizz';
    else if (i % 5 === 0) output[i - 1] = 'Buzz';
    else output[i - 1] = i.toString()
  }
  return output;
}
// Concised code with same logic 
const fizzBuzz1 = (num) => {
  let output = [];
  for (let i = 1; i <= num; i++)
    ((i % 3 === 0) && (i % 5 === 0)) ? 
    output.push('FizzBuzz') : (i % 3 === 0) ? 
    output.push('Fizz') : (i % 5 === 0) ? 
    output.push('Buzz') : output.push(String(i));
  return output;
}
console.log(fizzBuzz1(3))
console.log(fizzBuzz1(5))




