/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {

    let hashmap = new Map([
        ['}', '{'],
        [']', '['],
        [')', '(']
    ])

    let arr = []

    // checking if the first value is a closing parenthesis
    if (hashmap.has(s[0])) return false;

    for (let i = 0; i < s.length; i++) {

        // if value is a closing parenthesis 
        if (hashmap.has(s[i])) {
            // if bracket matches with last element in arr
            if (hashmap.get(s[i]) == arr[arr.length-1]) arr.pop();
            else return false
        } else arr.push(s[i])
    }
    return !arr.length;

}
// @lc code=end

let s = "(])";

console.log(isValid(s)); // true
