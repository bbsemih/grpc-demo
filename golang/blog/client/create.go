package main

import (
	"context"
	"log"

	pb "github.com/bbsemih/microservices/blog/proto"
)

func createBlog(c pb.BlogServiceClient) string {
	log.Println("---createBlog was invoked---")

	blog := &pb.Blog{
		AuthorId: "Semih",
		Title:    "rustligmaballs.com",
		Content:  "Content of the first blog",
	}

	res, err := c.CreateBlog(context.Background(), blog)

	if err != nil {
		log.Fatalf("Unexpected error: %v", err)
	}
	log.Printf("Blog has been created: %s\n", res.Id)
	return res.Id
}
