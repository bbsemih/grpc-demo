// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var weather_pb = require('./weather_pb.js');

function serialize_weather_WeatherRequest(arg) {
  if (!(arg instanceof weather_pb.WeatherRequest)) {
    throw new Error('Expected argument of type weather.WeatherRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_weather_WeatherRequest(buffer_arg) {
  return weather_pb.WeatherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_weather_WeatherResponse(arg) {
  if (!(arg instanceof weather_pb.WeatherResponse)) {
    throw new Error('Expected argument of type weather.WeatherResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_weather_WeatherResponse(buffer_arg) {
  return weather_pb.WeatherResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WeatherServiceService = exports.WeatherServiceService = {
  weather: {
    path: '/weather.WeatherService/Weather',
    requestStream: false,
    responseStream: false,
    requestType: weather_pb.WeatherRequest,
    responseType: weather_pb.WeatherResponse,
    requestSerialize: serialize_weather_WeatherRequest,
    requestDeserialize: deserialize_weather_WeatherRequest,
    responseSerialize: serialize_weather_WeatherResponse,
    responseDeserialize: deserialize_weather_WeatherResponse,
  },
  // Unary
weatherManyTimes: {
    path: '/weather.WeatherService/WeatherManyTimes',
    requestStream: false,
    responseStream: true,
    requestType: weather_pb.WeatherRequest,
    responseType: weather_pb.WeatherResponse,
    requestSerialize: serialize_weather_WeatherRequest,
    requestDeserialize: deserialize_weather_WeatherRequest,
    responseSerialize: serialize_weather_WeatherResponse,
    responseDeserialize: deserialize_weather_WeatherResponse,
  },
  // Server-streaming
weatherExact: {
    path: '/weather.WeatherService/WeatherExact',
    requestStream: true,
    responseStream: false,
    requestType: weather_pb.WeatherRequest,
    responseType: weather_pb.WeatherResponse,
    requestSerialize: serialize_weather_WeatherRequest,
    requestDeserialize: deserialize_weather_WeatherRequest,
    responseSerialize: serialize_weather_WeatherResponse,
    responseDeserialize: deserialize_weather_WeatherResponse,
  },
  // Client streaming
weatherMutual: {
    path: '/weather.WeatherService/WeatherMutual',
    requestStream: true,
    responseStream: true,
    requestType: weather_pb.WeatherRequest,
    responseType: weather_pb.WeatherResponse,
    requestSerialize: serialize_weather_WeatherRequest,
    requestDeserialize: deserialize_weather_WeatherRequest,
    responseSerialize: serialize_weather_WeatherResponse,
    responseDeserialize: deserialize_weather_WeatherResponse,
  },
  // Bi-directional streaming
};

exports.WeatherServiceClient = grpc.makeGenericClientConstructor(WeatherServiceService);
