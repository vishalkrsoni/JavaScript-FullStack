// Q-1) Write a function to convert an array of string of numbers into a number and multiply it by 10.
// Input:
let arr = ['1', '2', '3', '4', '5', '6']
// Output:
// 1234560
const arrToNum1 = (arr) => arr.map(value => Number(value)).join('') * 10;
console.log('M1 :', arrToNum1(arr))

const arrToNum2 = (arr) => arr.map(Number).join('') * 10;
console.log('M2 :', arrToNum2(arr))

const arrToNum3 = arr => arr.reduce((acc, curr) => acc.concat(+curr), []).join('') * 10
console.log('M3 :', arrToNum3(arr))

const arrToNum4 = arr => {
	let output = []
	arr.forEach(ele => output.push(+ele))
	return output.join('') * 10
}
console.log('M4 :', arrToNum4(arr))

const arrToNum5 = arr => {
	let output = ''
	for (let i = 0; i <= arr.length - 1; i++) {
		output += arr[i]
	}
	return output * 10
}
console.log('M5 :', arrToNum5(arr))

