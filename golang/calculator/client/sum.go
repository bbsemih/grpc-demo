package main

import (
	"context"
	"log"

	pb "github.com/bbsemih/microservices/calculator/proto"
)

func doSum(c pb.CalculatorServiceClient) {
	log.Println("doSum was invoked!")
	res, err := c.Sum(context.Background(), &pb.SumRequest{
		FirstNumber:  10,
		SecondNumber: 25,
	})

	if err != nil {
		log.Fatalf("Could not sum: %v", err)
	}
	log.Printf("Sum: %d", res.Result)
}
