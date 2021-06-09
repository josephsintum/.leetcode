/*
 * @lc app=leetcode id=231 lang=typescript
 *
 * [231] Power of Two
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {

    if (n < 1) return false // if 0 for negative numbers
    if (n <= 2) return true 
    // if n is divisible by 2
    else if (n % 2 == 0) return isPowerOfTwo(n / 2)
    return false;

};
// @lc code=end

// Submission report
// Your runtime beats 20 % of typescript submissions
// Your memory usage beats 8.89 % of typescript submissions (40.9 MB)

console.log(isPowerOfTwo(-16))