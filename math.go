package main

import "log"

func main() {
	log.Print(Sum(10, 10))
}

func Sum(a int, b int) int {
	return a + b
}
