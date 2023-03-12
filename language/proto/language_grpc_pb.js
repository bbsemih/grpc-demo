// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var language_pb = require('./language_pb.js');

function serialize_language_LanguageRequest(arg) {
  if (!(arg instanceof language_pb.LanguageRequest)) {
    throw new Error('Expected argument of type language.LanguageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_language_LanguageRequest(buffer_arg) {
  return language_pb.LanguageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_language_LanguageResponse(arg) {
  if (!(arg instanceof language_pb.LanguageResponse)) {
    throw new Error('Expected argument of type language.LanguageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_language_LanguageResponse(buffer_arg) {
  return language_pb.LanguageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LanguageServiceService = exports.LanguageServiceService = {
  language: {
    path: '/language.LanguageService/Language',
    requestStream: false,
    responseStream: false,
    requestType: language_pb.LanguageRequest,
    responseType: language_pb.LanguageResponse,
    requestSerialize: serialize_language_LanguageRequest,
    requestDeserialize: deserialize_language_LanguageRequest,
    responseSerialize: serialize_language_LanguageResponse,
    responseDeserialize: deserialize_language_LanguageResponse,
  },
  // Unary
};

exports.LanguageServiceClient = grpc.makeGenericClientConstructor(LanguageServiceService);
