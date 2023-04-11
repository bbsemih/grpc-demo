package main

import (
	"context"
	"log"

	pb "github.com/bbsemih/microservices/blog/proto"
)

func updateBlog(c pb.BlogServiceClient, id string) {
	log.Println("---UpdateBlog was invoked---")

	newBlog := &pb.Blog{
		Id:       id,
		AuthorId: "Not Semih",
		Title:    "Not Golang",
		Content:  "Not Microservices",
	}
	_, err := c.UpdateBlog(context.Background(), newBlog)

	if err != nil {
		log.Fatalf("Error while calling UpdateBlog RPC: %v", err)
	}
	log.Println("Blog has been updated")
}
