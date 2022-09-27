// Q-1  https://leetcode.com/problems/find-peak-element/
var findPeakElement = function (arr) {
  let peak = []
  let n = arr.length - 1
  if (arr[0] > arr[1]) peak.push(arr[0])
  for (let i = 1; i < arr.length - 1; i++)
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) peak.push(arr[i])
  if (arr[n] > arr[n - 1]) peak.push(arr[n])
  return peak.length > 0 ? arr.indexOf(peak[0]) : 0
}
