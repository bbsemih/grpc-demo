// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var language_pb = require('./language_pb.js');

function serialize_language_LangRequest(arg) {
  if (!(arg instanceof language_pb.LangRequest)) {
    throw new Error('Expected argument of type language.LangRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_language_LangRequest(buffer_arg) {
  return language_pb.LangRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_language_LangResponse(arg) {
  if (!(arg instanceof language_pb.LangResponse)) {
    throw new Error('Expected argument of type language.LangResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_language_LangResponse(buffer_arg) {
  return language_pb.LangResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LanguageServiceService = exports.LanguageServiceService = {
  lang: {
    path: '/language.LanguageService/Lang',
    requestStream: false,
    responseStream: false,
    requestType: language_pb.LangRequest,
    responseType: language_pb.LangResponse,
    requestSerialize: serialize_language_LangRequest,
    requestDeserialize: deserialize_language_LangRequest,
    responseSerialize: serialize_language_LangResponse,
    responseDeserialize: deserialize_language_LangResponse,
  },
  // Unary
};

exports.LanguageServiceClient = grpc.makeGenericClientConstructor(LanguageServiceService);
