package main

import (
	"context"
	"io"
	"log"

	pb "github.com/bbsemih/microservices/calculator/proto"
)

func doPrimes(c pb.CalculatorServiceClient) {
	log.Println("doPrimes was invoked!")

	req := &pb.PrimesRequest{
		Number: 12823794,
	}
	stream, err := c.Primes(context.Background(), req)

	if err != nil {
		log.Fatalf("There was an error calling Primes: %V\n", err)
	}
	for {
		res, err := stream.Recv()

		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatalf("error while reading stream: %v\n", err)
		}
		log.Printf("Primes: %d\n", res.Result)
	}
}
