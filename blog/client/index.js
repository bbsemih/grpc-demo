const grpc = require("@grpc/grpc-js")
const { BlogServiceClient } = require("../proto/blog_grpc_pb.js");
const fs = require("fs");
const { Blog, BlogId } = require("../proto/blog_pb");

function createBlog(client) {
    console.log(`---createBlog was invoked!---`);

    return new Promise((resolve, reject) => {
        const req = new Blog()
            .setAuthorId("Semih")
            .setTitle("Engineering Blog")
            .setContent("How to use gRPC?")
        client.createBlog(req, (err, res) => {
            if (err) {
                reject(err);
            }
            console.log(`Blog was created: ${res}`);
            resolve(res.getId());
        });
    });
};


//To use a gRPC client to communicate with a gRPC server. 
async function main() {
    const tls = true;
    let creds;
    if (tls) {
        const rootCert = fs.readFileSync("./ssl/ca.crt");
        creds = grpc.ChannelCredentials.createSsl(rootCert);
    } else {
        creds = grpc.ChannelCredentials.createInsecure();
    }
    const client = new BlogServiceClient(`localhost:50051`, creds);

    const id = await createBlog(client);

    client.close();
};

main();