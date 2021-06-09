/*
 * @lc app=leetcode id=953 lang=typescript
 *
 * [953] Verifying an Alien Dictionary
 */

// @lc code=start
function isAlienSorted(words: string[], order: string): boolean {

    // if one word then sorted is always true
    if (words.length == 1) return true

    let alienphabet = new Map()
    // create map of alien alphabet => order index
    for (let i = 0; i < order.length; i++) {
        alienphabet.set(order[i], i)
    }

    for (let i = 1; i < words.length; i++) {

        for (let j = 0; j < words[i - 1].length; j++) {
            console.log(words[i - 1][j] + words[i][j]);
            if (!words[i][j]) return false
            if (alienphabet.get(words[i - 1][j]) > alienphabet.get(words[i][j]))
                return false
            else if (alienphabet.get(words[i - 1][j]) < alienphabet.get(words[i][j]))
                break
        }
    }

    return true

};
// @lc code=end

// let words = ["hello", "leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz" // output: true
// let words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz" // Output: false
// let words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"   // false
// let words = ["kuvp", "q"], order = "ngxlkthsjuoqcpavbfdermiywz"    // output: true
let words = ["fxasxpc", "dfbdrifhp", "nwzgs", "cmwqriv", "ebulyfyve", "miracx", "sxckdwzv", "dtijzluhts", "wwbmnge", "qmjwymmyox"], order = "zkgwaverfimqxbnctdplsjyohu"    // output: false


console.log(isAlienSorted(words, order))
