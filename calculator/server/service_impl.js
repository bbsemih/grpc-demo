const { SumResponse } = require("../proto/sum_pb");
const { PrimeResponse } = require("../proto/primes_pb");
const { AverageResponse } = require("../proto/average_pb");

exports.sum = (call, callback) => {
    console.log("Sum was invoked!");
    const res = new SumResponse()
        .setResult(
            call.request.getFirstNumber() + call.request.getSecondNumber()
        )
    callback(null, res);
}

exports.primes = (call, _) => {
    console.log("Primes was invoked!");
    let number = call.request.getNumber();
    let divisor = 2;
    const res = new PrimeResponse();

    while (number > 1) {
        if (number % divisor == 0) {
            res.setResult(divisor);
            call.write(res);
            number /= divisor;
        } else {
            divisor++;
        }
    }
    call.end()
};

exports.average = (call, callback) => {
    console.log("Average was invoked!");
    let count = 0.0;
    let total = 0.0;

    call.on("data", (req) => {
        total += req.getNumber();
        count++;
    });

    call.on("end", () => {
        const res = new AverageResponse()
            .setResult(total / count);
        callback(null, res);
    })
};