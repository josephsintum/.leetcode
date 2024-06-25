/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const sym: Record<string, number> = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };

  let num = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] && sym[s[i]] < sym[s[i + 1]]) {
      num = num + (sym[s[i + 1]] - sym[s[i]]);
      i++;
      continue;
    }

    num = num + sym[s[i]];
  }

  return num;
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

const testCases = [
  { input: "III", output: 3 },
  { input: "LVIII", output: 58 },
  { input: "MCMXCIV", output: 1994 },
];

testCases.forEach(({ input, output }) => {
  const actual = romanToInt(input);
  assertEquals(
    output,
    actual,
    `Case: ${JSON.stringify(input)}, Expected "${output}", but got "${actual}"`,
  );
});
