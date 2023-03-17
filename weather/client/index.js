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

function doWeatherExact(client) {
    console.log("doWeatherExact was invoked!");
    const infos = ["Istanbul", "Turkey", "Rainy"];

    const call = client.weatherExact((err, res) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Exact Weather: ${res.getResult()}`);
    })
    infos.map((info) => {
        return new WeatherRequest().setCity(info);
    }).forEach((req) => call.write(req));
    call.end();
};

function doWeatherMutual(client) {
    console.log("doWeatherMutual was invoked!");
    const cities = ["Istanbul", "San Jose", "Paris"];
    const call = client.weatherMutual();

    call.on("data", (res) => {
        console.log(`Result: ${res.getResult()}`);
    });

    cities.map((city) => {
        return new WeatherRequest().setCity(city)
    }).forEach((req) => call.write(req));
    call.end();
};

function main() {
    const creds = grpc.ChannelCredentials.createInsecure();
    const client = new WeatherServiceClient("localhost:50051", creds);

    //doWeather(client);
    //doWeatherManyTimes(client)
    //doWeatherExact(client);
    doWeatherMutual(client); //bi-directional streaming

    client.close();
}
main();