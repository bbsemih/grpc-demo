// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sum_pb = require('./sum_pb.js');
var primes_pb = require('./primes_pb.js');
var average_pb = require('./average_pb.js');
var max_pb = require('./max_pb.js');
var sqrt_pb = require('./sqrt_pb.js');

function serialize_calculator_AverageRequest(arg) {
  if (!(arg instanceof average_pb.AverageRequest)) {
    throw new Error('Expected argument of type calculator.AverageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_AverageRequest(buffer_arg) {
  return average_pb.AverageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_AverageResponse(arg) {
  if (!(arg instanceof average_pb.AverageResponse)) {
    throw new Error('Expected argument of type calculator.AverageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_AverageResponse(buffer_arg) {
  return average_pb.AverageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_MaxRequest(arg) {
  if (!(arg instanceof max_pb.MaxRequest)) {
    throw new Error('Expected argument of type calculator.MaxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_MaxRequest(buffer_arg) {
  return max_pb.MaxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_MaxResponse(arg) {
  if (!(arg instanceof max_pb.MaxResponse)) {
    throw new Error('Expected argument of type calculator.MaxResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_MaxResponse(buffer_arg) {
  return max_pb.MaxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_PrimeRequest(arg) {
  if (!(arg instanceof primes_pb.PrimeRequest)) {
    throw new Error('Expected argument of type calculator.PrimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_PrimeRequest(buffer_arg) {
  return primes_pb.PrimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_PrimeResponse(arg) {
  if (!(arg instanceof primes_pb.PrimeResponse)) {
    throw new Error('Expected argument of type calculator.PrimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_PrimeResponse(buffer_arg) {
  return primes_pb.PrimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_SqrtRequest(arg) {
  if (!(arg instanceof sqrt_pb.SqrtRequest)) {
    throw new Error('Expected argument of type calculator.SqrtRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SqrtRequest(buffer_arg) {
  return sqrt_pb.SqrtRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_SqrtResponse(arg) {
  if (!(arg instanceof sqrt_pb.SqrtResponse)) {
    throw new Error('Expected argument of type calculator.SqrtResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SqrtResponse(buffer_arg) {
  return sqrt_pb.SqrtResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_SumRequest(arg) {
  if (!(arg instanceof sum_pb.SumRequest)) {
    throw new Error('Expected argument of type calculator.SumRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SumRequest(buffer_arg) {
  return sum_pb.SumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_SumResponse(arg) {
  if (!(arg instanceof sum_pb.SumResponse)) {
    throw new Error('Expected argument of type calculator.SumResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SumResponse(buffer_arg) {
  return sum_pb.SumResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorServiceService = exports.CalculatorServiceService = {
  sum: {
    path: '/calculator.CalculatorService/Sum',
    requestStream: false,
    responseStream: false,
    requestType: sum_pb.SumRequest,
    responseType: sum_pb.SumResponse,
    requestSerialize: serialize_calculator_SumRequest,
    requestDeserialize: deserialize_calculator_SumRequest,
    responseSerialize: serialize_calculator_SumResponse,
    responseDeserialize: deserialize_calculator_SumResponse,
  },
  // Unary
primes: {
    path: '/calculator.CalculatorService/Primes',
    requestStream: false,
    responseStream: true,
    requestType: primes_pb.PrimeRequest,
    responseType: primes_pb.PrimeResponse,
    requestSerialize: serialize_calculator_PrimeRequest,
    requestDeserialize: deserialize_calculator_PrimeRequest,
    responseSerialize: serialize_calculator_PrimeResponse,
    responseDeserialize: deserialize_calculator_PrimeResponse,
  },
  // Server streaming
average: {
    path: '/calculator.CalculatorService/Average',
    requestStream: true,
    responseStream: false,
    requestType: average_pb.AverageRequest,
    responseType: average_pb.AverageResponse,
    requestSerialize: serialize_calculator_AverageRequest,
    requestDeserialize: deserialize_calculator_AverageRequest,
    responseSerialize: serialize_calculator_AverageResponse,
    responseDeserialize: deserialize_calculator_AverageResponse,
  },
  // Client Streaming
max: {
    path: '/calculator.CalculatorService/Max',
    requestStream: true,
    responseStream: true,
    requestType: max_pb.MaxRequest,
    responseType: max_pb.MaxResponse,
    requestSerialize: serialize_calculator_MaxRequest,
    requestDeserialize: deserialize_calculator_MaxRequest,
    responseSerialize: serialize_calculator_MaxResponse,
    responseDeserialize: deserialize_calculator_MaxResponse,
  },
  // Bi-directional Streaming
sqrt: {
    path: '/calculator.CalculatorService/Sqrt',
    requestStream: false,
    responseStream: false,
    requestType: sqrt_pb.SqrtRequest,
    responseType: sqrt_pb.SqrtResponse,
    requestSerialize: serialize_calculator_SqrtRequest,
    requestDeserialize: deserialize_calculator_SqrtRequest,
    responseSerialize: serialize_calculator_SqrtResponse,
    responseDeserialize: deserialize_calculator_SqrtResponse,
  },
  // Created this to test error handling
};

exports.CalculatorServiceClient = grpc.makeGenericClientConstructor(CalculatorServiceService);
