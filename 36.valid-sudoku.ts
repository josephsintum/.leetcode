/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    const seen = new Set();
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val === ".") continue;
      if (seen.has(val)) return false;
      seen.add(val);
    }
  }

  for (let j = 0; j < 9; j++) {
    const seen = new Set();
    for (let i = 0; i < board.length; i++) {
      const val = board[i][j];
      if (val === ".") continue;
      if (seen.has(val)) return false;
      seen.add(val);
    }
  }

  for (let i = 0; i < 9; i = i + 3) {
    for (let j = 0; j < 9; j = j + 3) {
      const sub = board
        .slice(i, i + 3)
        .map((row) => row.slice(j, j + 3))
        .flat();
      const seen = new Set();
      for (let k = 0; k < sub.length; k++) {
        const val = sub[k];
        if (val === ".") continue;
        if (seen.has(val)) return false;
        seen.add(val);
      }
    }
  }

  return true;
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

const testCases = [
  {
    board: [
      [".", ".", ".", ".", "5", ".", ".", "1", "."],
      [".", "4", ".", "3", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "3", ".", ".", "1"],
      ["8", ".", ".", ".", ".", ".", ".", "2", "."],
      [".", ".", "2", ".", "7", ".", ".", ".", "."],
      [".", "1", "5", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "2", ".", ".", "."],
      [".", "2", ".", "9", ".", ".", ".", ".", "."],
      [".", ".", "4", ".", ".", ".", ".", ".", "."],
    ],
    expected: false,
  },
  {
    board: [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ],
    expected: true,
  },
  {
    board: [
      ["8", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ],
    expected: false,
  },
];

testCases.forEach(({ expected, ...input }) => {
  const actual = isValidSudoku(input.board);
  assertEquals(
    actual,
    expected,
    `Case: ${
      JSON.stringify(input)
    }, Expected "${expected}", but got "${actual}"`,
  );
});
