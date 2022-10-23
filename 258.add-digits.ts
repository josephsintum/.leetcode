/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 */

// @lc code=start
function addDigits(num: number): number {
  if (num < 10) {
    return num
  }

  let val = 0

  for (let digit of num.toString()) {
    val += Number(digit)
  }
  
  return addDigits(val)
}
// @lc code=end


