/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
  let ans = 1.00000;

  if (Math.abs(x) === 1) return x;

  if (n > 0) {
    for (let i = 0; i < n; i++) {
      ans = ans * x;
    }
  } else {
    for (let i = 0; i < -n; i++) {
      ans = ans / x;
      if (ans < 0.000009) return 0;
    }
  }
  return Number(ans.toFixed(5));
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

const testCases = [
  { input: { x: -1.00000, n: -2147483648 }, expected: 1.00000 },
  { input: { x: 2, n: -2147483648 }, expected: 0.00000 },
  { input: { x: 1.00000, n: -2147483648 }, expected: 1.00000 },
  { input: { x: 34.00515, n: -3 }, expected: 3e-05 },
  { input: { x: 8.88023, n: 3 }, expected: 700.28148 },
  { input: { x: 2.0000, n: 10 }, expected: 1024.00000 },
  { input: { x: 2.10000, n: 3 }, expected: 9.26100 },
  { input: { x: 2.00000, n: -2 }, expected: 0.25000 },
];

testCases.forEach(({ input, expected }) => {
  const actual = myPow(input.x, input.n);
  assertEquals(
    actual,
    expected,
    `Case: ${JSON.stringify(input)}, Expected "${expected}", but got "${actual}"`,
  );
});
