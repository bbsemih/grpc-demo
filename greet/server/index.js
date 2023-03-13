const grpc = require("@grpc/grpc-js");
const serviceImpl = require("./service_impl");
const { GreetServiceService } = require("../proto/greet_grpc_pb.js");

const addr = "localhost:50051";

function cleanup(server) {
    console.log("Cleanup...");
    if (server) {
        server.forceShutdown();
    }
};

function main() {
    //1
    const server = new grpc.Server();
    const creds = grpc.ServerCredentials.createInsecure();

    //3 - When you press CTRL+C
    process.on("SIGINT", () => {
        console.log("Caught interrupt signal!");
        cleanup(server);
    })

    //4
    server.addService(GreetServiceService, serviceImpl);
    //2- Binds the server to the specified address 
    //and port number and starts listening for incoming requests
    server.bindAsync(addr, creds, (err, _) => {
        if (err) {
            return cleanup(server);
        }
        server.start();
    })
    console.log(`Server listening on port: ${addr}`);
};

main();