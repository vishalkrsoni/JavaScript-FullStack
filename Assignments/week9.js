
// Q-1) https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
var kWeakestRows = function (mat, k) {
  let strength = [], result = []
  let min = Infinity
  for (let i = 0; i < mat.length; i++)
    strength.push(mat[i].reduce((acc, curr) => acc + curr, 0))
  for (let j = 0; j < strength.length; j++) {
    min = Math.min(min, ...strength)
    let pos = strength.indexOf(min)
    strength[pos] = Infinity
    min = Infinity
    result.push(pos)
  }
  return result.slice(0, k)
};
