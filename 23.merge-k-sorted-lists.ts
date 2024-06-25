/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start

//  Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts"

const testCases = [
  {
    input: [
      [1, 4, 5],
      [1, 3, 4],
      [2, 6],
    ],
    output: [1, 1, 2, 3, 4, 4, 5, 6],
  },
  { input: [], output: [] },
  { input: [[]], output: [] },
]

testCases.forEach(({ input, output }) => {
  const actual = mergeKLists(input)
  assertEquals(
    output,
    actual,
    `Case: ${JSON.stringify(input)}, Expected "${output}", but got "${actual}"`
  )
})
