const getLongestNumber = (nums) => {
  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    const currentLength = nums[i].toString().length;
    longest = currentLength > longest ? currentLength : longest;
  }
  return longest;
}

const getDigit = (number, place, longestNumber) => {
  const strNum = number.toString();
  const size = strNum.length;
  const mod = longestNumber - size;
  return strNum[place - mod] || 0;
}

const radixSort = (arr) => {
  const longestNumber = getLongestNumber(arr);
  const buckets = Array(10).fill().map(() => []);

  for (let i = longestNumber - 1; i >= 0; i--) {
    while(arr.length) {
      const current = arr.shift();
      const digit = getDigit(current, i, longestNumber);
      buckets[digit].push(current);
    }

    for (let j = 0; j < buckets.length; j++) {
      const bucket = buckets[j];
      while (bucket.length) {
        arr.push(bucket.shift());
      }
    }
  }
  return arr;
}