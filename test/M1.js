// Test-1 --- Hackkerrank

// 1. Leftmost Unique
console.log('Q1: Find Leftmost Unique character')
function processData1(input) {
    let result = -1
    for (let i = 0; i < input.length; i++) {
        //if (input.indexOf(input[i]) == i && input.indexOf(input[i], i + 1) == -1) {
        if (input.indexOf(input[i], i + 1) == -1) {
            result = i //input.indexOf(input[i])
            break;
        }
    }
    console.log(result)
}
processData1('hackkerrankh')

// Object way
console.log('Q13: Find Leftmost Unique character')
function processData5(input) {
  let result = -1, obj = {}
  for (let i = 0; i < input.length; i++) {
    obj[input[i]] ? obj[input[i]] += 1 : obj[input[i]] = 1
  }
  let char = Object.keys(obj)
  let count = Object.values(obj)
  for (let i = 0; i < input.length; i++) {
    if (count[i] === 1) {
      result = i
      break
    }
  }
  console.log(input.indexOf(char[result]))
}
processData5('hackkerrankh')

function processData5(input) {
  let result = -1, obj = {}
  for (let i = 0; i < input.length; i++) {
    obj[input[i]] ? obj[input[i]] += 1 : obj[input[i]] = 1
  }
  let arr = Object.entries(obj)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] == 1)
      result = input.indexOf(arr[i][0])
    break
  }
  console.log(result)
}
processData5('hackkerrankh')

// 2. Count Steps
console.log('Q2 : Count Steps ')
function processData2(input) {
  let step = 0
  while (input != 1) {
    (input % 2 == 0) ? input = input / 2 : input = (input * 3) + 1
    step++
  }
  console.log(step)
}
processData2(3)

// 3. Contiguous Segment
console.log('Q3 : Contiguous Segment of 0/1')
function processData3(input) {
    let one = 0, zero = 0, count = 0;
    for (let i = 0; i < input.length; i++) {
        if (i == 0 || input[i] != input[i - 1]) count = 0;
        count++;
        (input[i] == '0') ? zero = Math.max(zero, count) : one = Math.max(one, count);
    }
    (one > zero) ? console.log('YES') : console.log('NO');
    return `1's: ${one} 0's: ${zero}`
}
processData3('10011101111000111')

// 4. Mars Exploration
console.log('Q4 : Mars Exploration')
function processData4(input) {
  let count = 0
  for (let i = 0; i < input.length; i += 3) {
    if (input[i] != 'S') count++;
    if (input[i + 1] != 'O') count++;
    if (input[i + 2] != 'S') count++;
  }
  return count
}
console.log(processData4('SOSTOTSTTOOS'))



// 
console.log('Q5 : Find Unique Characters in a string')
const processData6 = input => [...new Set(input)].sort()
console.log(processData6('mydogisbarking'))

// 
console.log('Q6 : Find median of two arrays')
var findMedianSortedArrays = function (nums1, nums2) {
  let out = [...nums1, ...nums2].sort((a, b) => a - b)
  let mid = out.length / 2
  return out.length % 2 == 0 ? (out[mid] + out[mid - 1]) / 2 : out[(mid - 1 / 2)]

};
console.log(findMedianSortedArrays([1, 3, 4, 6], [2, 5, 7, 8]))

// leetcode
console.log('Q7 :  Remove a given no.')
var removeElement = function (nums, val) {
  nums = nums.filter((item) => item != val)
  return nums
};
console.log(removeElement([2, 3, 4, 5, 7, 3, 4, 8, 4, 12, 78, 4, 67], 4))

// 
console.log('Q8 :  Remove given value')
var removeElement1 = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums
};
console.log(removeElement1([2, 3, 4, 5, 7, 3, 4, 8, 4, 12, 78, 4, 67], 4))

////// 
console.log('Q9 : Remove duplicate values')
const removeDuplicates = (nums) => [...new Set(nums)].sort((a, b) => a - b)
console.log(removeDuplicates([2, 3, 4, 5, 7, 3, 4, 8, 4, 12, 78, 4, 67]))

// 
console.log('Q10 : Find maximum area ')
const maxArea = (height) => {
  let maxAr = 0, i = 0, j = height.length - 1
  while (i < j) {
    maxAr = Math.max(maxAr, Math.min(height[i], height[j]) * (j - i))
    height[i] <= height[j] ? i++ : j--
  }
  return maxAr
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))


// let result = {}
// result[output[i]] ? result[output[i]] += 1 : result[output[i]] = 1
console.log('Q11 : Sum of 3 no. is 0 ')

let nums = [-1, 0, 1, 2, -1, -4] //Output: [[-1,-1,2],[-1,0,1]]
var threeSum = (nums) => {
  let output = {}, result = []
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] == 0)
          output[[nums[i], nums[j], nums[k]].sort((a, b) => a - b)] =
            [nums[i], nums[j], nums[k]]
      }
    }
  }
  return Object.values(output)
};
console.log(threeSum(nums))


console.log('Q12 : Merge two sorted array ')
// 
let arr1 = [1, 2, 3, 4, 0, 0, 0]
arr2 = [2, 3, 6]
const merge = function (nums1, m, nums2, n) {
  let total = m + n - 1
  m--
  n--
  while (n >= 0) {
    nums1[total--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--]
    // console.log(nums1[m],nums2[n])
  }
  return arr1
}

console.log(merge(arr1, 4, arr2, 3))