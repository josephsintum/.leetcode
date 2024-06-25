/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap: Record<number, number> = {}
  nums.forEach((num) => {
    if (frequencyMap[num]) {
      frequencyMap[num]++
    } else {
      frequencyMap[num] = 1
    }
  })
  return Object.entries(frequencyMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((n) => Number(n[0]))
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts"

const testCases = [
  { nums: [1, 1, 1, 2, 2, 3], k: 2, expected: [1, 2] },
  { nums: [1], k: 1, expected: [1] },
]

testCases.forEach(({ expected, ...input }) => {
  const actual = topKFrequent(input.nums, input.k)
  assertEquals(
    actual,
    expected,
    `Case: ${JSON.stringify(input)}, Expected "${expected}", but got "${actual}"`
  )
})
