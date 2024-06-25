/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  s = s.split("").sort().join("")
  t = t.split("").sort().join("")

  return s === t
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts"

const testCases = [
  { input: { s: "aa", t: "bb" }, output: false },
  { input: { s: "rat", t: "car" }, output: false },
  { input: { s: "anagram", t: "nagaram" }, output: true },
]

testCases.forEach(({ input, output }) => {
  const actual = isAnagram(input.s, input.t)
  assertEquals(
    output,
    actual,
    `Case: ${JSON.stringify(input)}, Expected "${output}", but got "${actual}"`
  )
})
