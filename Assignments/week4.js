/*
Q-1) Write a program to print the index of the maximum value of an array
of numbers using any loop.
*/

let arr = [7, 5, 3, 9, 1, 6, 4, 8, 2]
const findMax = (arr) => {
  let max = 0;
  arr.forEach(item => {
    if (item > max) max = item;
  })
  return arr.indexOf(max)
    ;
}
console.log(findMax(arr))

