/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  let combo = []
  let str = "(".repeat(n) + ")".repeat(n)
  combo.push(str)
  console.log(str.split("").flatMap((v, i) => v + i))

  return combo
}
// @lc code=end

const n = 3
console.log(`n = ${n},`, generateParenthesis(n))