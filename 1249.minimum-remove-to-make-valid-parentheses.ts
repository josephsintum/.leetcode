/*
 * @lc app=leetcode id=1249 lang=typescript
 *
 * [1249] Minimum Remove to Make Valid Parentheses
 */

// @lc code=start
function minRemoveToMakeValid(s: string): string {

    let remove = []
    let stack = []
    for (let i = 0; i < s.length; i++) {

        if (s[i] == '(') stack.push(i)
        else if (s[i] == ')')
            if (stack.length == 0) remove.push(i)
            else stack.pop()


    }
    remove = [...remove, ...stack].sort((a, b) => b - a)
    for (const item of remove) s = s.slice(0, item) + s.slice(item + 1)
    return s
};
// @lc code=end

// Runtime: 104 ms, faster than 79.37% of TypeScript online submissions
// Memory Usage: 46.8 MB, less than 50.79% of TypeScript online submissions

let s = "lee)(((t(c)o)de)"  // output "lee(t(c)o)de"
console.log(minRemoveToMakeValid(s))