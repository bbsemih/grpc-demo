package main

import (
	"context"
	"log"

	pb "github.com/bbsemih/microservices/blog/proto"
)

func readBlog(c pb.BlogServiceClient, id string) *pb.Blog {
	log.Println("---ReadBlog was invoked---")

	req := &pb.BlogId{Id: id}

	res, err := c.ReadBlog(context.Background(), req)

	if err != nil {
		log.Printf("Unexpected error: %v", err)
	}

	log.Printf("Blog was read: %v", res)
	return res
}
