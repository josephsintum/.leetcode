/*
 * @lc app=leetcode id=10 lang=typescript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  if (!p) return !s;

  if (!p.includes("*")) {
    const firstMatch = !!s && (p[0] === s[0] || p[0] === ".");
    return firstMatch && isMatch(s.slice(1), p.slice(1));
  } else if (p.length >= 2 && p[1] === '*') {

  }
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

const testCases = [
  { input: { s: "aa", p: "a" }, output: false },
  { input: { s: "aa", p: "a*" }, output: true },
  { input: { s: "ab", p: ".*" }, output: true },
];

testCases.forEach(({ input, output }) => {
  const actual = isMatch(input.s, input.p);
  assertEquals(
    output,
    actual,
    `Case: ${JSON.stringify(input)}, Expected "${output}", but got "${actual}"`,
  );
});
