const grpc = require("@grpc/grpc-js");
const { LanguageServiceClient } = require("../proto/language_grpc_pb");
const { LanguageRequest } = require("../proto/language_pb.js");

//Unary gRPC
function doLanguage(client) {
    console.log("doLanguage was invoked!");
    const req = new LanguageRequest()
        .setLanguage("JavaScript")
    client.language(req, (err, res) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Information: ${res.getInfo()}`);
    })
};

function main() {
    const creds = grpc.ChannelCredentials.createInsecure();
    const client = new LanguageServiceClient("localhost:50051", creds);
    doLanguage(client);
    client.close();
};

main();