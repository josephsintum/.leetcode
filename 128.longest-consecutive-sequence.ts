/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
    const hashSet = new Set<number>(nums)
    let longest = 0

    for (const num of nums) {
        if (hashSet.has(num - 1)) continue
        else {
            let n = 0
            while (hashSet.has(num + n)) {
                n++
            }
			if (n > longest) longest = n
        }
    }
	return longest
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts"

const testCases = [
    { nums: [100, 4, 200, 1, 3, 2], expected: 4 },
    { nums: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], expected: 9 },
    { nums: [], expected: 0 },
]

testCases.forEach(({ expected, ...input }) => {
    const actual = longestConsecutive(input.nums)
    assertEquals(
        actual,
        expected,
        `Case: ${JSON.stringify(input)}, Expected "${expected}", but got "${actual}"`
    )
})
