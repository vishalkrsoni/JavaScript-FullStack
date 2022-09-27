// function addRect(M, L, R) {
//   let i = 0
//   let M1 = []
//   while (i != L) {
//     let m = M.slice(0, L)[i]
//     m = m.slice(0, R)
//     M1.push(m)
//     i++
//   }
//   return M1.flat().reduce((a, b) => a + b)
// }

const add = (M, L, R) => {
  let M1=[]
  for (let i = 0; i < L; i++) {
    for (let j = 0; j < R; i++){
      M[i][j] = M[i][j] + M[j][i] - M[i][i] + M[L, R]
    }
  }
  console.log(M)
}

console.log(add([[1,2,3],[4,5,6],[7,8,9]],2,3))
function processData(input) {
  input = input.split("\n")
  let rows = input[0].split(" ").map(Number)[0]
  let columns = input[0].split(" ").map(Number)[1]
  let Q = input[rows + 1]
  let M = []
  let matrix = input.slice(1, rows + 1)
  for (r of matrix) {
    M.push(r.split(" ").map(Number))
  }
  for (let i = 0; i < Q; i++) {
    let L = input[rows + 2 + i].split(" ").map(Number)[0]
    let R = input[rows + 2 + i].split(" ").map(Number)[1]
    console.log(addRect(M, L, R))
  }
}