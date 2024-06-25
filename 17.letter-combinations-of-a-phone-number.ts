/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
let letterMap: Record<string, string[]> = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];

  let combos: string[] = [];

  function backTrack(index: number, combo: string) {
    if (index === digits.length) {
      combos.push(combo);
      return;
    }

    for (const num of letterMap[digits[index]]) {
      backTrack(index + 1, combo + num);
    }
  }
  backTrack(0, "");
  return combos;
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

const testCases = [
  { input: "2", output: ["a", "b", "c"] },
  {
    input: "23",
    output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
  },
  { input: "", output: [] },
];

testCases.forEach(({ input, output }) => {
  const actual = letterCombinations(input);
  assertEquals(
    output,
    actual,
    `Case: ${JSON.stringify(input)}, Expected "${output}", but got "${actual}"`,
  );
});
