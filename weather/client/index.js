const grpc = require("@grpc/grpc-js");
const { WeatherRequest } = require("../proto/weather_pb");
const { WeatherServiceClient } = require("../proto/weather_grpc_pb");

function doWeather(client) {
    console.log("doWeather was invoked!");
    const req = new WeatherRequest()
        .setCity("Istanbul");
    client.weather(req, (err, res) => {
        if (err) {
            return console.log(err);
        };
        console.log(`Weather: ${res.getResult()}`);
    })
};

function doWeatherManyTimes(client) {
    console.log("doWeatherManyTimes was invoked!");
    const req = new WeatherRequest()
        .setCity("Berlin")
    const call = client.weatherManyTimes(req)
    call.on("data", (res) => {
        console.log(`WeatherManyTimes: ${res.getResult()}`);
    });
};

function main() {
    const creds = grpc.ChannelCredentials.createInsecure();
    const client = new WeatherServiceClient("localhost:50051", creds);

    //doWeather(client);
    doWeatherManyTimes(client)
    client.close();
}
main();