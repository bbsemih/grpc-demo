const grpc = require("@grpc/grpc-js")
const { GreetServiceClient } = require("../proto/greet_grpc_pb.js");
const { GreetRequest } = require("../proto/greet_pb.js");

//Unary
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
};

//Server Streaming

function doGreetManyTimes(client) {
    console.log("doGreetManyTimes was invoked!");
    const req = new GreetRequest()
        .setFirstName("Semih")
    const call = client.greetManyTimes(req);

    call.on("data", (res) => {
        console.log(`GreetManyTimes: ${res.getResult()}`);
    })
};

//Client Streaming

function doLongGreet(client) {
    console.log("doLongGreet was invoked!");

    const names = ["Semih", "Berkay", "Öztürk"];
    const call = client.longGreet((err, res) => {
        if (err) {
            return console.log(err);
        }
        console.log(`LongGreet: ${res.getResult()}`);
    })
    names.map((name) => {
        return new GreetRequest().setFirstName(name);
    }).forEach((req) => call.write(req))
    call.end();
}

//To use a gRPC client to communicate with a gRPC server. 
function main() {
    const creds = grpc.ChannelCredentials.createInsecure();
    const client = new GreetServiceClient("localhost:50051", creds);

    //doGreet(client)
    //doGreetManyTimes(client)
    doLongGreet(client)
    client.close();
}

main();