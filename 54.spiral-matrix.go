/*
 * @lc app=leetcode id=54 lang=golang
 *
 * [54] Spiral Matrix
 */
package main

// @lc code=start
func spiralOrder(matrix [][]int) []int {

	if len(matrix) < 1 {
		return []int{}
	} else if len(matrix) < 2 {
		return matrix[0]
	}

	spiral := []int{}
	
	top := 0
	bottom := len(matrix) - 1
	left := 0
	right := len(matrix[0]) - 1
	size := len(matrix) * len(matrix[0])

	for len(spiral) < size {

		// top
		for i := left; i <= right && len(spiral) < size; i++ {
			spiral = append(spiral, matrix[top][i])
		}
		top++

		// right
		for i := top; i <= bottom && len(spiral) < size; i++ {
			spiral = append(spiral, matrix[i][right])
		}
		right--

		// bottom
		for i := right; i >= left && len(spiral) < size; i-- {
			spiral = append(spiral, matrix[bottom][i])
		}
		bottom--

		// left
		for i := bottom; i >= top && len(spiral) < size; i-- {
			spiral = append(spiral, matrix[i][left])
		}
		left++

	}

	return spiral
}

// @lc code=end

func main() {

	matrix := [][]int{{7}, {9}, {6}}
	spiralOrder(matrix)
}
