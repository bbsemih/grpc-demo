package main

import (
	"context"
	"io"
	"log"
	"time"

	pb "github.com/bbsemih/microservices/calculator/proto"
)

func doMax(c pb.CalculatorServiceClient) {
	log.Printf("doMax was invoked!")
	stream, err := c.Max(context.Background())

	if err != nil {
		log.Fatalf("Error while calling Max: %v\n", err)
	}
	waitc := make(chan struct{})

	go func() {
		numbers := []int32{6, 9, 13, 3, 23, 15, 6}

		for _, number := range numbers {
			log.Printf("Sending number: %v\n", number)
			stream.Send(&pb.MaxRequest{
				Number: number,
			})
			time.Sleep(1 * time.Second)
		}
		stream.CloseSend()
	}()

	go func() {
		for {
			res, err := stream.Recv()

			if err == io.EOF {
				break
			}

			if err != nil {
				log.Printf("Error while reading server stream: %v\n", err)
				break
			}

			log.Printf("Maximum number so far: %v\n", res.Result)
		}
		close(waitc)
	}()
	<-waitc
}
