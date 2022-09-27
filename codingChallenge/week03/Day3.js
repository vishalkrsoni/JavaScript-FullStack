const chechNum = (num) => (num % 2 === 0) ? 'It is an even number' : 'It is an odd number'

console.log(chechNum(6))
console.log(chechNum(5))

const orTable = (input1, input2) => (input1 == false && input2 == false) ? false : true

console.log(orTable(true, false))
console.log(orTable(true, true))
console.log(orTable(false, true))
console.log(orTable(false, false))
