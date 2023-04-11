package main

import (
	"context"
	"log"

	pb "github.com/bbsemih/microservices/blog/proto"
)

func deleteBlog(c pb.BlogServiceClient, id string) {
	log.Println("---DeleteBlog was invoked---")

	_, err := c.DeleteBlog(context.Background(), &pb.BlogId{Id: id})

	if err != nil {
		log.Fatalf("Error while calling DeleteBlog RPC: %v", err)
	}

	log.Println("Blog has been deleted")
}
