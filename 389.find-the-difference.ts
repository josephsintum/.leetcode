/*
 * @lc app=leetcode id=389 lang=typescript
 *
 * [389] Find the Difference
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
  for (const tChar of t) {
    const found = s.indexOf(tChar);
    if (found === -1) return tChar;
    else {
      t = t.replace(tChar, "");
      s = s.replace(tChar, "");
    }
  }
  return "";
}

// @lc code=end
