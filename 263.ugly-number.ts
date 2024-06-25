/*
 * @lc app=leetcode id=263 lang=typescript
 *
 * [263] Ugly Number
 */

// @lc code=start
function isUgly(n: number): boolean {
  if (n < 1) {
    return false
  }
  if (n === 1) {
    return true
  }
  if (n % 2 === 0) {
    return isUgly(n /= 2)
  }
  if (n % 3 === 0) {
    return isUgly(n /= 3)
  }
  if (n % 5 === 0) {
    return isUgly(n /= 5)
  }

  return false
}
// @lc code=end
