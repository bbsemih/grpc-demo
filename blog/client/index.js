const grpc = require("@grpc/grpc-js")
const { BlogServiceClient } = require("../proto/blog_grpc_pb.js");
const fs = require("fs");


//To use a gRPC client to communicate with a gRPC server. 
function main() {
    const tls = true;
    let creds;
    if (tls) {
        const rootCert = fs.readFileSync("./ssl/ca.crt");
        creds = grpc.ChannelCredentials.createSsl(rootCert);
    } else {
        creds = grpc.ChannelCredentials.createInsecure();
    }
    const client = new BlogServiceClient("localhost:50051", creds);

    client.close();
};

main();