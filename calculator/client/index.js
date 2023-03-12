const grpc = require("@grpc/grpc-js")
const { CalculatorServiceClient } = require("../proto/calculator_grpc_pb");
const { SumRequest } = require("../proto/sum_pb");
const { PrimeRequest } = require("../proto/primes_pb");
const { AverageRequest } = require("../proto/average_pb");

function doSum(client) {
    console.log("doSum was invoked!");

    const req = new SumRequest()
        .setFirstNumber(1)
        .setSecondNumber(11);

    client.sum(req, (err, res) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Sum: ${res.getResult()}`);
    })
}

function doPrimes(client) {
    console.log("doPrimes was invoked!");

    const req = new PrimeRequest()
        .setNumber(200);

    const call = client.primes(req);

    call.on("data", (res) => {
        console.log(`Primes: ${res.getResult()}`);
    })
}

function doAverage(client) {
    console.log("doAverage was invoked!");
    const numbers = [...Array(11).keys()].slice(1);
    const call = client.average((err, res) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Average: ${res.getResult()}`);
    })
    numbers.map((num) => {
        return new AverageRequest().setNumber(num);
    }).forEach((req) => call.write(req));
    call.end();
};

//To use a gRPC client to communicate with a gRPC server. 
function main() {
    const creds = grpc.ChannelCredentials.createInsecure();
    const client = new CalculatorServiceClient("localhost:50051", creds);

    //doSum(client)
    //doPrimes(client)
    doAverage(client)
    client.close();
}

main();