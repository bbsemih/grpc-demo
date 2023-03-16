const grpc = require("@grpc/grpc-js")
const { BlogServiceClient } = require("../proto/blog_grpc_pb.js");
const fs = require("fs");
const { Blog, BlogId } = require("../proto/blog_pb");

function createBlog(client) {
    console.log("---createBlog was invoked!---");
    return new Promise((resolve, reject) => {
        const req = new Blog()
            .setAuthorId("Semih")
            .setTitle("What is gRPC?")
            .setContent("gRPC was developed by Google!")
        client.createBlog(req, (err, res) => {
            if (err) {
                reject(err);
            }
            console.log(`Blog was created: ${res}`);
            resolve(res.getId());
        })
    });
};

function readBlog(client, id) {
    console.log("---readBlog was invoked!---");
    return new Promise((resolve, reject) => {
        const req = new BlogId().setId(id);

        client.readBlog(req, (err, res) => {
            if (err) {
                reject(err);
            }
            console.log(`Blog was read: ${res}`);
            resolve();
        })
    })
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
    await readBlog(client, id);

    client.close();
};

main();