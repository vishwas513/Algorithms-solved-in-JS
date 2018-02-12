function subsets(nums) {
  result = [];
  powerSetUtil(0, nums.length - 1, nums, result, []);
  return result;
}

function powerSetUtil(start, end, nums, result, subset) {
  result.push(subset);
  for (let i = start; i <= end; i++) {
    subset.push(nums[i]);
    powerSetUtil(i + 1, end, nums, result, subset.slice());
    subset.pop()
  }
}