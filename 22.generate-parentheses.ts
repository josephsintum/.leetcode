/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    const solution: string[] = []
    const answer: string[] = []

    function backTracking(open: number, close: number) {
        if (n === open && open === close) {
            answer.push(solution.join(""))
            return
        }

        if (open < n) {
            solution.push("(")
            backTracking(open + 1, close)
            solution.pop()
        }
        if (close < open) {
            solution.push(")")
            backTracking(open, close + 1)
            solution.pop()
        }
    }
    backTracking(0, 0)
    return answer
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts"

const testCases = [
    { n: 3, expected: ["((()))", "(()())", "(())()", "()(())", "()()()"] },
    { n: 1, expected: ["()"] },
    { n: 0, expected: [""] },
]

testCases.forEach(({ expected, ...input }) => {
    const actual = generateParenthesis(input.n)
    assertEquals(
        actual,
        expected,
        `Case: ${JSON.stringify(input)}, Expected "${expected}", but got "${actual}"`
    )
})
