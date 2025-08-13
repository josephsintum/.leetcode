package main

import (
	"testing"

	"github.com/matryer/is"
)

func TestTwoSum(t *testing.T) {
	is := is.New(t)
	tests := []struct {
		nums   []int
		target int
		want   []int
	}{
		{[]int{2, 7, 11, 15}, 9, []int{0, 1}},
		{[]int{3, 2, 4}, 6, []int{1, 2}},
		{[]int{3, 3}, 6, []int{0, 1}},
		{[]int{-3, 4, 3, 90}, 0, []int{0, 2}},
		{[]int{-1, -2, -3, -4, -5}, -8, []int{2, 4}},
	}

	for _, tt := range tests {
		is.Equal(twoSum(tt.nums, tt.target), tt.want) // twoSum mismatch
	}
}
