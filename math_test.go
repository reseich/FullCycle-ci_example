package main

import "testing"

func TestSoma(t *testing.T) {
	total := Sum(15, 12)

	if total != 30 {
		t.Errorf("Result wrong. Result:%d | Expected %d", total, 30)
	}
}
