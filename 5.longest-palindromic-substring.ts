/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let result = ""
  for (let i = 0; i < s.length; i++) {
    let odd = expandAroundCenter(s, i, i)
    let even = expandAroundCenter(s, i, i + 1)
    let max = odd.length > even.length ? odd : even
    if (max.length > result.length) {
      result = max
    }
  }
  return result
}

function expandAroundCenter(s: string, left: number, right: number): string {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }
  return s.slice(left + 1, right)
}
// @lc code=end

console.log(longestPalindrome("babad")) // "bab" or "aba"
console.log(longestPalindrome("cbbd")) // "bb"
