const grpc = require("@grpc/grpc-js")
const { GreetServiceClient } = require("../proto/greet_grpc_pb.js");
const { GreetRequest } = require("../proto/greet_pb.js");

function doGreet(client) {
    console.log("doGreet was invoked!");
    const req = new GreetRequest()
        .setFirstName("Semih")
    client.greet(req, (err, res) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Greet: ${res.getResult()}`);
    })
}

//To use a gRPC client to communicate with a gRPC server. 

function main() {
    const creds = grpc.ChannelCredentials.createInsecure();
    const client = new GreetServiceClient("localhost:50051", creds);

    doGreet(client)
    client.close();
}

main();