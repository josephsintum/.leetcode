/*
 * @lc app=leetcode id=231 lang=typescript
 *
 * [231] Power of Two
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {

    if (n < 1) return false // if 0 for negative numbers
    // if n is divisible by 2
    else if (Math.log2(n) % 1 == 0) return true
    return false;

};
// @lc code=end

// Submission report
// Your runtime beats 66.67 % of typescript submissions
// Your memory usage beats 66.67 % of typescript submissions (40.3 MB)

console.log(isPowerOfTwo(1))