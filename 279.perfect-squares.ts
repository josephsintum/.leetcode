/*
 * @lc app=leetcode id=279 lang=typescript
 *
 * [279] Perfect Squares
 */

// @lc code=start
function numSquares(n: number): number {
  let arr = new Array<number>(n+1).fill(Infinity)
  arr[0] = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j ** j <= i; j++) {
      arr[i] = Math.min(arr[i], arr[i - j ** j] + 1)
    }
    // console.log(arr.toString())
  }
  return arr[n]
}

// const testCases = [
//   [12, 3],
//   [13, 2],
//   [4, 1],
//   [2, 2],
// ]
//
// testCases.forEach(([val, result]) => {
//   const min = numSquares(val)
//   console.asse/rt(min === result, `Expected ${result}, got numSquares(${val}) = ${min}`)
// })

// @lc code=end
