/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {

    // if matrix is empty, or has 1 or 2 elements then return flattened matrix
    if (matrix.length < 2) return matrix.flat();

    let spiral = [];

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    let size = matrix.length * matrix[0].length

    // check if spiral is complete
    while (spiral.length < size) {

        // top
        for (let i = left; i <= right && spiral.length < size; i++)
            spiral.push(matrix[top][i])
        top++;

        // right
        for (let i = top; i <= bottom && spiral.length < size; i++)
            spiral.push(matrix[i][right])
        right--;

        // bottom
        for (let i = right; i >= left && spiral.length < size; i--)
            spiral.push(matrix[bottom][i])
        bottom--;

        // left
        for (let i = bottom; i >= top && spiral.length < size; i--)
            spiral.push(matrix[i][left])
        left++;

    }    

    return spiral
};
// @lc code=end

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

spiralOrder(matrix)