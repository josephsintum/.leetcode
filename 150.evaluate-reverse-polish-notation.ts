/*
 * @lc app=leetcode id=150 lang=typescript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
    if (tokens.length === 1) {
        return parseInt(tokens[0], 10)
    }

    for (let i = 0; i < tokens.length; i++) {
        if (isNaN(parseInt(tokens[i], 10))) {
            let num1 = parseInt(tokens[i - 2])
            let num2 = parseInt(tokens[i - 1])
            let results

            switch (tokens[i]) {
                case "+":
                    results = num1 + num2
                    break
                case "-":
                    results = num1 - num2
                    break
                case "*":
                    results = num1 * num2
                    break
                case "/":
                    results = num1 / num2
                    break
            }

            tokens.splice(i - 2, 3, String(results))

            return evalRPN(tokens)
        }
    }
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts"

const testCases = [
    { tokens: ["2", "1", "+", "3", "*"], expected: 9 },
    { tokens: ["4", "13", "5", "/", "+"], expected: 6 },
    { tokens: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"], expected: 22 },
]

testCases.forEach(({ expected, ...input }) => {
    const actual = evalRPN(input.tokens)
    assertEquals(
        actual,
        expected,
        `Case: ${JSON.stringify(input)}, Expected "${expected}", but got "${actual}"`
    )
})
