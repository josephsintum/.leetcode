/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let prefix = ""

  let min = strs[0].length
  strs.forEach((str) => (min = Math.min(min, str.length)))

  for (let i = 0; i < min; i++) {
    const currChar = strs[0][i]
    let eq = true

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== currChar) {
        eq = false
        break
      }
    }

    if (eq) {
      prefix += currChar
    } else break
  }

  return prefix
}

// @lc code=end
