/*
 * @lc app=leetcode id=473 lang=typescript
 *
 * [473] Matchsticks to Square
 */

// @lc code=start

function makesquare(matchsticks: number[]): boolean {

    if (matchsticks.length < 4) return false
    const perimeter = matchsticks.reduce((a, b) => a + b)
    matchsticks = matchsticks.sort((a, b) => b - a)
    const side = perimeter / 4
    if (Math.max(...matchsticks) > side) return false

    return dfs(0, 0, 1, [])

    function dfs(tmpSum: number, index: number, groupId: number, visited: boolean[]): boolean {
        if (groupId == 4) return true
        if (side == tmpSum) return dfs(0, 0, groupId + 1, visited)
        if (tmpSum > side) return false
        for (let i = index; i < matchsticks.length; i++) {
            if (visited[i]) continue
            if (i > 0 && matchsticks[i] == matchsticks[i - 1] && !visited[i - 1]) continue
            visited[i] = true
            if (dfs(tmpSum + matchsticks[i], i + 1, groupId, visited)) return true
            visited[i] = false
        }
        return false
    }

};

// @lc code=end

// Your runtime beats 100 % of typescript submissions
// Your memory usage beats 83.33 % of typescript submissions (41.2 MB)

// let matchsticks = [1, 1, 2, 2, 2] // true
// let matchsticks = [3, 3, 3, 3, 4] // false
let matchsticks = [5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3]  // true
// let matchsticks = [10,6,5,5,5,3,3,3,2,2,2,2] // true

console.log(makesquare(matchsticks))


/*
// Your runtime beats 77.78 % of typescript submissions
// Your memory usage beats 70.37 % of typescript

if (matchsticks.length < 4) return false
    const perimeter = matchsticks.reduce((a, b) => a + b)
    matchsticks = matchsticks.sort((a, b) => b - a)
    const side = perimeter / 4
    if (Math.max(...matchsticks) > side) return false

    function dfs(a: number, b: number, c: number, d: number, index: number) {
        if (index == matchsticks.length) {
            if (a == b && b == c && c == d) return true
            return false
        }

        let length = matchsticks[index]

        if (a + length <= side && dfs(a + length, b, c, d, index + 1)) return true
        if (b + length <= side && dfs(a, b + length, c, d, index + 1)) return true
        if (c + length <= side && dfs(a, b, c + length, d, index + 1)) return true
        if (d + length <= side && dfs(a, b, c, d + length, index + 1)) return true
        return false
    }

    return dfs(0, 0, 0, 0, 0)

*/