/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  s = s.trimStart();
  let nums = s.split("");

  let isNegative = false;
  if (nums[0] === "-") {
    isNegative = true;
    nums.shift();
  } else if (nums[0] === "+") nums.shift();

  let str = "";

  for (const num of nums) {
    if (!Number.isNaN(parseInt(num))) {
      str += num;
    } else break;
  }

  if (str === "") return 0;

  let value = Number(str);
  if (isNegative) value = -value;

  let negLimit = -Math.pow(2, 31);
  let posLimit = Math.pow(2, 31) - 1;
  if (value < negLimit) return negLimit;
  if (value > posLimit) return posLimit;
  return value;
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

const testCases = [
  { input: "00043", output: 43 },
  { input: "43", output: 43 },
  { input: "   -42", output: -42 },
  { input: "4193 with words", output: 4193 },
  { input: (Math.pow(2, 31) + 4).toString(10), output: Math.pow(2, 31) - 1 },
];

testCases.forEach(({ input, output }) => {
  const actual = myAtoi(input);
  assertEquals(
    output,
    actual,
    `Case: ${JSON.stringify(input)}, Expected "${output}", but got "${actual}"`,
  );
});
