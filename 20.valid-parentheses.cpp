/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start

#include <iostream>
#include <stack>
#include <map>
using namespace std;

bool isValid(string s)
{
    stack<char> stk;

    if (s.length() == 1)
        return false;

    for (char &c : s) // ){
    {
        if (c == '{' || c == '(' || c == '[') // check for closing bracket
            stk.push(c);
        else if (!stk.empty() && (stk.top() == '}' || stk.top() == ')' || stk.top() == ']'))
            stk.pop();
        else
            return false;
    }

    if (!stk.empty())
        return false;

    return true;
}
// @lc code=end

int main()
{
    cout << isValid("((") << '\n';
    cout << isValid("[") << '\n';
    cout << isValid("]") << '\n';
    cout << isValid("()") << '\n';
    cout << isValid("){") << '\n';
}