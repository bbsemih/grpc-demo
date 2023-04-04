package main

import (
	"fmt"
	"io"
	"log"

	pb "github.com/bbsemih/microservices/greet/proto"
)

func (s *Server) LongGreet(stream pb.GreetService_LongGreetServer) error {
	log.Println("LongGreet was invoked!")
	res := ""
	for {
		req, err := stream.Recv()

		//EOF is the error returned by Read when no more input is available.
		if err == io.EOF {
			return stream.SendAndClose(&pb.GreetResponse{
				Result: res,
			})
		}

		if err != nil {
			log.Fatalf("Error while reading client stream: %v\n", err)
		}

		res += fmt.Sprintf("Hello %s!\n", req.FirstName)
	}
}
