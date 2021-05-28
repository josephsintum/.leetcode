/*
 * @lc app=leetcode id=7 lang=golang
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.62%)
 * Likes:    2801
 * Dislikes: 4395
 * Total Accepted:    936.4K
 * Total Submissions: 3.7M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *
 *
 * Input: 123
 * Output: 321
 *
 *
 * Example 2:
 *
 *
 * Input: -123
 * Output: -321
 *
 *
 * Example 3:
 *
 *
 * Input: 120
 * Output: 21
 *
 *
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 *
 */
package leetcode

import (
	"strconv"
)

// @lc code=start
func reverse(x int) int {
	negativity := false
	if x < 0 {
		negativity = true
	}

	xString := strconv.FormatInt(int64(x), 10)

	for _, num := range xString {
		xString = string(num) + xString
	}

	return 0
}

// @lc code=end
