/*
 * @lc app=leetcode id=1 lang=golang
 *
 * [1] Two Sum
 */

package main

// @lc code=start
func twoSum(nums []int, target int) []int {
	// for i := range nums {
	// 	for j := i + 1; j < len(nums); j++ {
	// 		sum := nums[i] + nums[j]
	// 		if sum == target {
	// 			return []int{i, j}
	// 		}
	// 	}
	// }

	seen := make(map[int]int)
	for i, num := range nums {
		comp := target - num
		if j, found := seen[comp]; found {
			return []int{j, i}
		}
		seen[num] = i
	}

	return []int{}
}

// @lc code=end
