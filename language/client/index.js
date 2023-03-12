const grpc = require("@grpc/grpc-js");
const { LanguageServiceClient } = require("../proto/language_grpc_pb");
const { LangRequest } = require("../proto/language_pb");

//Unary gRPC
function langInfo(client) {
    console.log("langInfo was invoked");
    const req = new LangRequest()
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
    langInfo(client);
    client.close();
}

main();