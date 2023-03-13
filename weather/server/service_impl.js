const pb = require("../proto/weather_pb");

exports.weather = (call, callback) => {
    console.log("Weather was invoked!");
    const res = new pb.WeatherResponse()
        .setResult(`${call.request.getCity()} is rainy today!`);
    callback(null, res);
};

exports.weatherManyTimes = (call, _) => {
    console.log("WeatherManyTimes was invoked!");
    const res = new pb.WeatherResponse();

    for (let i = 0; i < 4; i++) {
        res.setResult(`${i}-)Weather: ${call.request.getCity()}`);
        call.write(res);
    }
    call.end();
};