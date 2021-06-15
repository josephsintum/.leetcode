/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) return false
    else if (x < 10) return true

    let num = new String(x)
    let j = num.length - 1
    for (let i = 0; i < num.length / 2; i++) {
        if (num[i] == num[j]) j--;
        else return false
    }
    return true
};
// @lc code=end

// Your runtime beats 65.53 % of typescript submissions
// Your memory usage beats 52.33 % of typescript submissions (49.4 MB)
console.log(isPalindrome(11)) // true