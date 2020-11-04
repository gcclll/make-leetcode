/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  let len = nums.length;

  let i = 0;
  while (i < len) {
    const val = nums[i],
      res = target - val;

    if (map.has(res)) {
      return [i, map.get(res)];
    }

    map.set(val, i);

    i++;
  }

  return -1;
};

/*
Status: Accepted (29/29)

Runtime: 80 ms, faster than 79.67% of JavaScript submissions.

Memory Usage: 39.4 MB, less than 5.71% of JavaScript submissions.
 */
