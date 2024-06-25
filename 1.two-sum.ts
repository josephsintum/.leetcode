/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

const testCases = [
  { nums: [0, 4, 3, 0], target: 0, expected: [0, 3] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
];

testCases.forEach(({ expected, ...input }) => {
  const actual = twoSum(input.nums, input.target);
  assertEquals(
    actual,
    expected,
    `Case: ${
      JSON.stringify(input)
    }, Expected "${expected}", but got "${actual}"`,
  );
});
