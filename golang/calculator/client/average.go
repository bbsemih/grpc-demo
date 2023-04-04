package main

import (
	"context"
	"log"

	pb "github.com/bbsemih/microservices/calculator/proto"
)

func doAverage(c pb.CalculatorServiceClient) {
	log.Println("doAvergare was invoked!")

	stream, err := c.Average(context.Background())
	if err != nil {
		log.Fatalf("Error while calling Average: %v\n", err)
	}
	nums := []int32{1, 2, 3, 4, 5}

	for _, num := range nums {
		log.Printf("Sending req: %v\n", num)

		stream.Send(&pb.AverageRequest{
			Number: num,
		})
	}

	res, err := stream.CloseAndRecv()
	if err != nil {
		log.Fatalf("Error while receiving response from Average: %v\n", err)
	}
	log.Printf("Average Response: %v\n", res.Result)
}
