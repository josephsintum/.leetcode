/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
    public stack: number[]
    public min: number

    constructor() {
        this.stack = []
    }

    push(val: number): void {
        this.stack.unshift(val)
        if (this.min === undefined) {
            this.min = val
        } else if (val < this.min) {
            this.min = val
        }
    }

    pop(): void {
        const top = this.stack.shift()
        if (top === this.min) {
            this.min = this.stack[0]
            for (const num of this.stack) {
                if (num < this.min) {
                    this.min = num
                }
            }
        }
    }

    top(): number {
        return this.stack[0]
    }

    getMin(): number {
        return this.min
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
