/*
 * @lc app=leetcode id=264 lang=typescript
 *
 * [264] Ugly Number II
 */

// @lc code=start

let memo = new Map()

function isUgly(n: number): boolean {
  if (n < 1) {
    return false
  }
  if (n === 1) {
    return true
  }
  if (n % 2 === 0) {
    return isUgly((n /= 2))
  }
  if (n % 3 === 0) {
    return isUgly((n /= 3))
  }
  if (n % 5 === 0) {
    return isUgly((n /= 5))
  }

  return false
}

function nthUglyNumber(n: number): number {
  let uglyNum = 1
  let index = 0
  while (index < n) {
    if (isUgly(uglyNum)) {
        memo.set()
      index++
    }
    uglyNum++
  }
  return uglyNum-1
}
// @lc code=end

// console.log({10: nthUglyNumber(10)})
// console.log({1: nthUglyNumber(1)})
console.log({1352: nthUglyNumber(1352)})
