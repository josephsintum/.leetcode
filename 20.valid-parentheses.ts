/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {

    let arr = []

    if (s[0] === '}' || s[0] === ']' || s[0] === ')') return false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '{' || s[i] === '[' || s[i] === '(') arr.push(s[i]);
        else if (s[i] === '}' && arr[arr.length - 1] === '{') arr.pop();
        else if (s[i] === ']' && arr[arr.length - 1] === '[') arr.pop();
        else if (s[i] === ')' && arr[arr.length - 1] === '(') arr.pop();
        else return false;
    }
    return !arr.length;

}
// @lc code=end

let s = "(])";

console.log(isValid(s)); // true
