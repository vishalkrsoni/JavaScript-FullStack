// Q1. What will be the output? (Easy) (15 marks)
// Ans:-  4 is maximum
let a = 3
let b = 4
const checkNum = (a,b) => {
  if (a > b) console.log(a, 'is maximum')
  else if (a == b) console.log(a, 'is equal to', b)
  else console.log(b, 'is maximum')
}
checkNum(a, b)
