/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  let hashMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      return true
    }
    hashMap[nums[i]] = true
  }
  return false
}
// @lc code=end
