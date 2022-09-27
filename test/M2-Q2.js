
function isTrime(num) {
  num = Math.sqrt(num)
  let sqr = Math.ceil(Math.sqrt(num))
  for (let i = 2; i < sqr; i++)
    if (num % i == 0) return false
  return num > 1
}
var isSquare = (num) => (num > 0 && Math.sqrt(num) % 1 === 0)

function processData(input) {
  let arr = input.split("\n")[1].split(" ").map(Number)
  for (let i = 0; i < arr.length; i++) {
    if (isSquare(arr[i])) {
      if (isTrime(arr[i])) console.log('YES')
    }
    else console.log('NO')
  }
}
