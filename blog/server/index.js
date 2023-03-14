const grpc = require("@grpc/grpc-js");
const fs = require("fs");
const serviceImpl = require("./service_impl");
const { BlogServiceService } = require("../proto/blog_grpc_pb.js");
const { MongoClient } = require("mongodb");

const addr = "localhost:50051";
const uri = "mongodb://root:root@localhost:27017/";
const mongoClient = new MongoClient(uri);

global.collection = undefined;

async function cleanup(server) {
    console.log("Cleanup...");
    if (server) {
        await mongoClient.close();
        server.forceShutdown();
    }
};

async function main() {
    //1
    const server = new grpc.Server();
    const tls = true;
    let creds;
    if (tls) {
        const rootCert = fs.readFileSync("./ssl/ca.crt");
        const certChain = fs.readFileSync("./ssl/server.crt");
        const privateKey = fs.readFileSync("./ssl/server.pem");

        creds = grpc.ServerCredentials.createSsl(rootCert, [{
            cert_chain: certChain,
            private_key: privateKey,
        }]);
    } else {
        creds = grpc.ServerCredentials.createInsecure();
    }

    //3 - When you press CTRL+C
    process.on("SIGINT", () => {
        console.log("Caught interrupt signal!");
        cleanup(server);
    })
    await mongoClient.connect();
    const database = mongoClient.db("blogdb");
    collection = database.collection("blog");

    //4
    server.addService(BlogServiceService, serviceImpl);
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

main().catch(cleanup);