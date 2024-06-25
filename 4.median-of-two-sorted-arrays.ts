/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let index1 = 0;
  let index2 = 0;
  let mergedNums = [];

  const totalLength = nums1.length + nums2.length;
  const middleIndex = totalLength / 2;

  for (let i = 0; i < totalLength; i++) {
    if (nums1[index1] < nums2[index2]) {
      mergedNums.push(nums1[index1]);
      index1++;
    } else if (nums1[index1] > nums2[index2]) {
      mergedNums.push(nums2[index2]);
      index2++;
    } else if (nums1[index1] === nums2[index2]) {
      mergedNums.push(nums1[index1], nums2[index2]);
      index1++;
      index2++;
      i++;
    } else if (index1 >= nums1.length) {
      mergedNums.push(...nums2.slice(index2));
      i = i + nums2.slice(index2).length;
    } else if (index2 >= nums2.length) {
      mergedNums.push(...nums1.slice(index1));
      i = i + nums1.slice(index1).length;
    }
    if (i > middleIndex) {
      break;
    }
  }
  if (totalLength % 2 === 0) { // even
    return (mergedNums[middleIndex] +
      mergedNums[middleIndex - 1]) / 2;
  } else {
    return mergedNums[Math.floor(middleIndex)];
  }
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

const testCases = [
  { input: { nums1: [1, 2], nums2: [1, 2, 3] }, output: 2 },
  { input: { nums1: [2, 2, 4, 4], nums2: [2, 2, 4, 4] }, output: 3 },
  { input: { nums1: [1], nums2: [1] }, output: 1 },
  { input: { nums1: [2], nums2: [] }, output: 2 },
  { input: { nums1: [], nums2: [2, 3] }, output: 2.5 },
  { input: { nums1: [], nums2: [1, 2, 3, 4, 5, 6] }, output: 3.5 },
  { input: { nums1: [1, 3], nums2: [2] }, output: 2 },
  { input: { nums1: [1, 2], nums2: [3, 4] }, output: 2.5 },
];

testCases.forEach(({ input, output }) => {
  const actual = findMedianSortedArrays(input.nums1, input.nums2);
  assertEquals(
    output,
    actual,
    `Case: ${JSON.stringify(input)}, Expected "${output}", but got "${actual}"`,
  );
});
