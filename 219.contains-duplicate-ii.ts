/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let hashMap = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      if (Math.abs(hashMap.get(nums[i])! - i) <= k) {
        return true
      }
    }
    hashMap.set(nums[i], i)
  }
  return false
}
// @lc code=end

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
