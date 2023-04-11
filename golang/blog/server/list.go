package main

import (
	"context"
	"fmt"
	"log"

	pb "github.com/bbsemih/microservices/blog/proto"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (server *Server) ListBlogs(in *emptypb.Empty, stream pb.BlogService_ListBlogsServer) error {
	log.Printf("ListBlogs was invoked with a streaming request")

	//get all blogs from database
	cur, err := collection.Find(context.Background(), primitive.D{{}})
	if err != nil {
		return status.Errorf(
			codes.Internal,
			"Unknown internal error",
		)
	}
	defer cur.Close(context.Background())

	for cur.Next(context.Background()) {
		data := &BlogItem{}
		err := cur.Decode(data)
		if err != nil {
			return status.Errorf(
				codes.Internal,
				fmt.Sprint("Error while decoding data from MongoDB: ", err),
			)
		}
		stream.Send(documentToBlog(data))
		if err = cur.Err(); err != nil {
			return status.Errorf(
				codes.Internal,
				"Error while sending data to client",
			)
		}
	}
	return nil
}
