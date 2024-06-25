/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams2(strs: string[]): string[][] {
  const sortedStrs = strs.map((str) => str.split("").sort().join(""))

  const groups = new Map<string, number[]>()
  for (let i = 0; i < sortedStrs.length; i++) {
    if (groups.has(sortedStrs[i])) {
      groups.get(sortedStrs[i])?.push(i)
    } else {
      groups.set(sortedStrs[i], [i])
    }
  }

  const arr = []

  for (const group of groups.values()) {
    arr.push(group.map((i) => strs[i]))
  }

  return arr
}

function groupAnagrams(strs: string[]): string[][] {
  const sortedStrs = strs.map((str) => str.split("").sort().join(""))

  const groups: Record<string, number[]> = {}
  for (let i = 0; i < sortedStrs.length; i++) {
    if (groups[sortedStrs[i]]) {
      groups[sortedStrs[i]].push(i)
    } else {
      groups[sortedStrs[i]] = [i]
    }
  }
  return Object.values(groups).map((group) => group.map((i) => strs[i]))
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts"

const testCases = [
  {
    strs: ["eat", "tea", "tan", "ate", "nat", "bat"],
    expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
  },
  { strs: [""], expected: [[""]] },
  { strs: ["a"], expected: [["a"]] },
]

testCases.forEach(({ expected, ...input }) => {
  const actual = groupAnagrams2(input.strs)
  assertEquals(
    actual,
    expected,
    `Case: ${JSON.stringify(input)}, Expected "${expected}", but got "${actual}"`
  )
})
