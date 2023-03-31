package main

import (
	"context"
	"log"

	pb "github.com/bbsemih/microservices/greet/proto"
)

func doGreet(c pb.GreetServiceClient) {
	log.Println("doGreet was invoked!")
	res, err := c.Greet(context.Background(), &pb.GreetRequest{
		FirstName: "Semih",
	})

	if err != nil {
		log.Fatalf("Could not greet: %v", err)
	}

	log.Printf("Greeting: %s", res.Result)
}
