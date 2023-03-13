const checkCallBack = (arr, callBack) => {
  let count = 0;
  for (const item of arr) {
    if (callBack(item)) {
      count++;
      if (count >= limit) return true;
    } else return false;
  }
  return count;
};

const isEven = (n) => n % 2 === 0;

let arr = [2, 4, 8, 6, 8, 6];
console.log(checkCallBack(arr, isEven));
